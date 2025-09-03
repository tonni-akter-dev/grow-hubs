"use client";

import React, { useMemo, useState } from "react";

// Type definitions
interface StatCardProps {
  label: string;
  value: string | number;
  sub: string;
  highlight?: boolean;
}

interface PanelProps {
  title: string;
  children: React.ReactNode;
}

interface SliderRowProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  display?: string;
}

interface NumberRowProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  prefix?: string;
}

interface MiniStatProps {
  label: string;
  value: string | number;
}

// interface ExplainerCardProps {
//   title: string;
//   body: string;
// }

// interface InfoTipProps {
//   children: React.ReactNode;
// }

interface CosellHeroCalculatorProps {
  openCalculator: boolean;
}

// Utility functions
function formatMoney(
  n: string | number | bigint,
  currency: string = "USD"
): string {
  try {
    const numericValue = Number(n);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(numericValue);
  } catch {
    return "$" + Math.round(Number(n)).toLocaleString("en-US");
  }
}

function toPct(n: number): string {
  return `${n.toFixed(1)}%`;
}

function currencySymbol(c: string): string {
  switch (c) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    case "NOK":
      return "kr ";
    default:
      return "$";
  }
}

// Main Component
export default function CosellHeroCalculator({
  openCalculator,
}: CosellHeroCalculatorProps) {
  const [currency] = useState<string>("USD");
  const [N, setN] = useState<number>(10000);
  const [rPct, setRPct] = useState<number>(5);
  const [F, setF] = useState<number>(50);
  const [ctrPct, setCtrPct] = useState<number>(8);
  const [cvrPct, setCvrPct] = useState<number>(2.5);
  const [price] = useState<number>(9);

  const [myContacts, setMyContacts] = useState<number>(500);
  const [activeEngagedPct, setActiveEngagedPct] = useState<number>(60);

  const [cosellSalesPerMonth, setCosellSalesPerMonth] = useState<number>(10);
  const [avgTicket, setAvgTicket] = useState<number>(200);
  const [commissionPct, setCommissionPct] = useState<number>(15);
  const [minSales, setMinSales] = useState<number>(0);

  const blendedCPC = 1.49;
  const purchaseCVR = 0.025;

  const reachOwned = 0.6;
  const promos = 1;

  const stats = useMemo(() => {
    const r = Math.max(0, rPct) / 100;
    const ctr = Math.max(0, ctrPct) / 100;
    const cvr = Math.max(0, cvrPct) / 100;
    const e = Math.max(0, Math.min(100, activeEngagedPct)) / 100;

    const views = N * r * F;
    const clicks = views * ctr;
    const buyers = Math.round(clicks * cvr);
    const mrr = buyers * Math.max(0, price);

    const C = Math.max(0, myContacts);
    const soloViews = C * e * reachOwned * promos;
    const soloClicks = soloViews * ctr;
    const buyersSolo = Math.round(soloClicks * cvr);

    const liftBuyersVsSolo = buyersSolo > 0 ? buyers / buyersSolo : Infinity;

    const cosellerEarnings =
      cosellSalesPerMonth * avgTicket * (Math.max(0, commissionPct) / 100);

    const expectedSalesFromContacts = soloClicks * cvr;
    const lambda = expectedSalesFromContacts;
    const probAtLeastOne = 1 - Math.exp(-lambda);

    const soloViewsMax = C * 1 * reachOwned * promos;
    const soloClicksMax = soloViewsMax * ctr;
    const lambdaMax = soloClicksMax * cvr;
    const probAtLeastOneMax = 1 - Math.exp(-lambdaMax);

    const CAC = blendedCPC / Math.max(0.0001, purchaseCVR);
    const profitPerSale_Paid = price - CAC;
    const monthlyProfitPaid = buyersSolo * profitPerSale_Paid;
    const profitPerSale_Growhubs = Math.max(0, price);

    return {
      views: Math.round(views),
      clicks: Math.round(clicks),
      buyers,
      mrr,
      buyersSolo,
      liftBuyersVsSolo,
      cosellerEarnings,
      probAtLeastOne,
      probAtLeastOneMax,
      CAC,
      profitPerSale_Paid,
      monthlyProfitPaid,
      profitPerSale_Growhubs,
    };
  }, [
    N,
    rPct,
    F,
    ctrPct,
    cvrPct,
    price,
    myContacts,
    activeEngagedPct,
    cosellSalesPerMonth,
    avgTicket,
    commissionPct,
  ]);

  return (
    <div className="w-full px-6 md:px-10">
      <div className="rounded-2xl shadow-lg">
        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <StatCard
            label="Platform members"
            value={`${N.toLocaleString("en-US")}+`}
            sub="Total members in Growhubs"
          />
          <StatCard
            label="Expected buyers / month"
            value={stats.buyers.toLocaleString("en-US")}
            sub="From co-selling network"
            highlight
          />
          <StatCard
            label={`Est. MRR at ${formatMoney(price, currency)}/mo`}
            value={formatMoney(stats.mrr, currency)}
            sub="From membership sales"
          />
          <StatCard
            label="Earn w/o a product"
            value={formatMoney(stats.cosellerEarnings, currency)}
            sub="Intermediary commissions"
          />
        </div>

        {openCalculator && (
          <div>
            {/* Panels */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Panel title="Your product reach & conversions (Growhubs)">
                <NumberRow
                  label="Minimum sales / month"
                  value={minSales}
                  onChange={setMinSales}
                />
                <SliderRow
                  label="Members in network (N)"
                  value={N}
                  min={1000}
                  max={200000}
                  step={500}
                  onChange={setN}
                  display={`${N.toLocaleString("en-US")}`}
                />
                <SliderRow
                  label="% who co-sell your offer (r)"
                  value={rPct}
                  min={0}
                  max={50}
                  step={0.5}
                  onChange={setRPct}
                  display={toPct(rPct)}
                />
                <SliderRow
                  label="Avg reach per co-seller (F)"
                  value={F}
                  min={10}
                  max={500}
                  step={5}
                  onChange={setF}
                  display={`${F.toLocaleString("en-US")}`}
                />
                <SliderRow
                  label="Click-through rate (CTR)"
                  value={ctrPct}
                  min={0}
                  max={20}
                  step={0.5}
                  onChange={setCtrPct}
                  display={toPct(ctrPct)}
                />
                <SliderRow
                  label="Conversion rate (CVR)"
                  value={cvrPct}
                  min={0}
                  max={10}
                  step={0.1}
                  onChange={setCvrPct}
                  display={toPct(cvrPct)}
                />
              </Panel>

              <Panel title="Your contacts & intermediary earnings">
                <NumberRow
                  label="Your contacts on platform (C)"
                  value={myContacts}
                  onChange={setMyContacts}
                />
                <SliderRow
                  label="Active engagement of your contacts (%)"
                  value={activeEngagedPct}
                  min={0}
                  max={100}
                  step={1}
                  onChange={setActiveEngagedPct}
                  display={toPct(activeEngagedPct)}
                />
                <SliderRow
                  label="Sales you drive / month (for others)"
                  value={cosellSalesPerMonth}
                  min={0}
                  max={200}
                  step={1}
                  onChange={setCosellSalesPerMonth}
                  display={`${cosellSalesPerMonth}`}
                />
                <NumberRow
                  label="Average order value"
                  value={avgTicket}
                  onChange={setAvgTicket}
                  prefix={currencySymbol(currency)}
                />
                <SliderRow
                  label="Your commission"
                  value={commissionPct}
                  min={0}
                  max={60}
                  step={1}
                  onChange={setCommissionPct}
                  display={toPct(commissionPct)}
                />
                <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <MiniStat
                    label="Chance >=1 commission (current e%)"
                    value={toPct(stats.probAtLeastOne * 100)}
                  />
                  <MiniStat
                    label="Max chance >=1 (e=100%)"
                    value={toPct(stats.probAtLeastOneMax * 100)}
                  />
                  <MiniStat
                    label="Monthly commissions"
                    value={formatMoney(stats.cosellerEarnings, currency)}
                  />
                </div>
              </Panel>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------- Components ----------------

function StatCard({ label, value, sub }: StatCardProps) {
  return (
    <div className="border border-neutral-11 rounded-xl px-4 py-8 text-neutral-50 flex flex-col gap-2 leading-normal">
      <p className="text-body-sm lg:text-body">{label}</p>
      <h2 className="text-h5 lg:text-h2 font-semibold stat_text">{value}</h2>
      <p className="text-body-sm text-white lg:text-body leading-[110%]">{sub}</p>
    </div>
  );
}

function Panel({ title, children }: PanelProps) {
  return (
    <div className="rounded-2xl border border-neutral-11 bg-transparent p-5">
      <div className="font-medium text-neutral-5">{title}</div>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  );
}

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  onChange,
  display,
}: SliderRowProps) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <label className="text-neutral-5">{label}</label>
        <span className="tabular-nums text-neutral-5">{display ?? value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="mt-2 w-full accent-sky-500"
      />
    </div>
  );
}

function NumberRow({ label, value, onChange, prefix }: NumberRowProps) {
  return (
    <div>
      <label className="block text-sm text-neutral-5">{label}</label>
      <div className="mt-1 flex items-center gap-2">
        {prefix && <span className="text-neutral-5">{prefix}</span>}
        <input
          type="number"
          value={value}
          min={0}
          onChange={(e) => onChange(parseFloat(e.target.value || "0"))}
          className="w-40 rounded-xl border text-neutral-5 border-neutral-11 px-3 py-2"
        />
      </div>
    </div>
  );
}

function MiniStat({ label, value }: MiniStatProps) {
  return (
    <div className="rounded-xl border border-neutral-11 bg-transparent p-3">
      <div className="text-xs text-neutral-5">{label}</div>
      <div className="text-lg font-semibold text-neutral-7">{value}</div>
    </div>
  );
}
