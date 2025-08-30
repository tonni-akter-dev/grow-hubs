'use client';
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

interface ExplainerCardProps {
  title: string;
  body: string;
}

interface InfoTipProps {
  children: React.ReactNode;
}

interface CosellHeroCalculatorProps {
  openCalculator: boolean;
}

function formatMoney(n: string | number | bigint, currency: string = "USD"): string {
  try {
    const numericValue = Number(n);
    return new Intl.NumberFormat(undefined, { style: "currency", currency, maximumFractionDigits: 0 }).format(numericValue);
  } catch {
    return "$" + Math.round(Number(n)).toLocaleString();
  }
}

function toPct(n: number): string {
  return `${n.toFixed(1)}%`;
}

function currencySymbol(c: string): string {
  switch (c) {
    case "USD": return "$";
    case "EUR": return "€";
    case "GBP": return "£";
    case "NOK": return "kr ";
    default: return "$";
  }
}

export default function CosellHeroCalculator({ openCalculator }: CosellHeroCalculatorProps) {
  // Core assumptions (editable)
  const [currency, setCurrency] = useState<string>("USD");
  const [N, setN] = useState<number>(10000); // members in the network
  const [rPct, setRPct] = useState<number>(5); // % who co-sell your product
  const [F, setF] = useState<number>(50); // avg reach per promoter inside platform
  const [ctrPct, setCtrPct] = useState<number>(8); // click-through rate %
  const [cvrPct, setCvrPct] = useState<number>(2.5); // conversion rate %
  const [price, setPrice] = useState<number>(9); // monthly membership price (treat as minimal price)

  // Your contacts & engagement (used for solo baseline + co-sell probability)
  const [myContacts, setMyContacts] = useState<number>(500);
  const [activeEngagedPct, setActiveEngagedPct] = useState<number>(60);

  // Co-seller earnings (without your own product)
  const [cosellSalesPerMonth, setCosellSalesPerMonth] = useState<number>(10); // sales you drive for others
  const [avgTicket, setAvgTicket] = useState<number>(200); // average order value
  const [commissionPct, setCommissionPct] = useState<number>(15); // your commission %
  const [minSales, setMinSales] = useState<number>(0); // UI-only target: Minimum sales / month

  // Fixed paid-ads assumptions for comparison table
  const blendedCPC = 1.49;   // USD blended CPC across FB/IG/Google/TikTok/LinkedIn
  const purchaseCVR = 0.025; // 2.5% purchase rate for cold traffic

  // Simple solo reach assumptions (no co-sell help)
  const reachOwned = 0.60;   // you reach 60% of engaged contacts per promo
  const promos = 1;          // 1 promo per month (simple baseline)

  const stats = useMemo(() => {
    const r = Math.max(0, rPct) / 100; // to decimal
    const ctr = Math.max(0, ctrPct) / 100;
    const cvr = Math.max(0, cvrPct) / 100;
    const e = Math.max(0, Math.min(100, activeEngagedPct)) / 100;

    // SELLER (Growhubs) - others co-sell your product
    const views = N * r * F;
    const clicks = views * ctr;
    const buyers = Math.round(clicks * cvr);
    const mrr = buyers * Math.max(0, price);

    // SOLO baseline (other platforms): only your own engaged contacts
    const C = Math.max(0, myContacts);
    const soloViews = C * e * reachOwned * promos;
    const soloClicks = soloViews * ctr;
    const buyersSolo = Math.round(soloClicks * cvr);

    // LIFT vs solo
    const liftBuyersVsSolo = buyersSolo > 0 ? buyers / buyersSolo : Infinity;

    // Earnings without product (as intermediary)
    const cosellerEarnings = cosellSalesPerMonth * avgTicket * (Math.max(0, commissionPct) / 100);

    // Probability of >=1 sale you drive for others from your contacts (Poisson)
    const expectedSalesFromContacts = soloClicks * cvr; // same as buyersSolo but not rounded
    const lambda = expectedSalesFromContacts;
    const probAtLeastOne = 1 - Math.exp(-lambda);

    // Max probability if engagement were 100%
    const soloViewsMax = C * 1 * reachOwned * promos;
    const soloClicksMax = soloViewsMax * ctr;
    const lambdaMax = soloClicksMax * cvr;
    const probAtLeastOneMax = 1 - Math.exp(-lambdaMax);

    // Paid ads economics for other platforms
    const CAC = blendedCPC / Math.max(0.0001, purchaseCVR);
    const profitPerSale_Paid = price - CAC; // can be negative
    const monthlyProfitPaid = buyersSolo * profitPerSale_Paid;

    // Profit per sale on Growhubs (no ads)
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
  }, [N, rPct, F, ctrPct, cvrPct, price, myContacts, activeEngagedPct, cosellSalesPerMonth, avgTicket, commissionPct]);

  return (
    <div className="w-full px-6 md:px-10">
      <div className="rounded-2xl shadow-lg">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <StatCard label="Platform members" value={`${N.toLocaleString()}+`} sub="Total members in Growhubs" />
          <StatCard label="Expected buyers / month" value={stats.buyers.toLocaleString()} sub="From co-selling network" highlight />
          <StatCard label={`Est. MRR at ${formatMoney(price, currency)}/mo`} value={formatMoney(stats.mrr, currency)} sub="From membership sales" />
          <StatCard label="Earn w/o a product" value={formatMoney(stats.cosellerEarnings, currency)} sub="Intermediary commissions" />
        </div>
        {openCalculator && (
          <div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Panel title="Your product reach & conversions (Growhubs)">
                <NumberRow label="Minimum sales / month" value={minSales} onChange={setMinSales} prefix={undefined} />
                <SliderRow label="Members in network (N)" value={N} min={1000} max={200000} step={500} onChange={setN} display={`${N.toLocaleString()}`} />
                <SliderRow label="% who co-sell your offer (r)" value={rPct} min={0} max={50} step={0.5} onChange={setRPct} display={toPct(rPct)} />
                <SliderRow label="Avg reach per co-seller (F)" value={F} min={10} max={500} step={5} onChange={setF} display={`${F.toLocaleString()}`} />
                <SliderRow label="Click-through rate (CTR)" value={ctrPct} min={0} max={20} step={0.5} onChange={setCtrPct} display={toPct(ctrPct)} />
                <SliderRow label="Conversion rate (CVR)" value={cvrPct} min={0} max={10} step={0.1} onChange={setCvrPct} display={toPct(cvrPct)} />
              </Panel>

              <Panel title="Your contacts & intermediary earnings">
                <NumberRow label="Your contacts on platform (C)" value={myContacts} onChange={setMyContacts} prefix={undefined} />
                <SliderRow label="Active engagement of your contacts (%)" value={activeEngagedPct} min={0} max={100} step={1} onChange={setActiveEngagedPct} display={toPct(activeEngagedPct)} />
                <SliderRow label="Sales you drive / month (for others)" value={cosellSalesPerMonth} min={0} max={200} step={1} onChange={setCosellSalesPerMonth} display={`${cosellSalesPerMonth}`} />
                <NumberRow label="Average order value" value={avgTicket} onChange={setAvgTicket} prefix={currencySymbol(currency)} />
                <SliderRow label="Your commission" value={commissionPct} min={0} max={60} step={1} onChange={setCommissionPct} display={toPct(commissionPct)} />
                <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                  <MiniStat label="Chance >=1 commission (current e%)" value={toPct(stats.probAtLeastOne * 100)} />
                  <MiniStat label="Max chance >=1 (e=100%)" value={toPct(stats.probAtLeastOneMax * 100)} />
                  <MiniStat label="Monthly commissions" value={formatMoney(stats.cosellerEarnings, currency)} />
                </div>
              </Panel>
            </div>

            <div className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-neutral-11 overflow-hidden">
                  <div className="px-4 py-3 bg-blue-950 text-neutral-2 font-medium">Growhubs - No ad spend</div>
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-neutral-11">
                      <tr><td className="px-4 py-3 text-neutral-5">Price per membership</td><td className="px-4 py-3 text-right text-neutral-1 font-medium">{formatMoney(price, currency)}</td></tr>
                      <tr><td className="px-4 py-3 text-neutral-5">Expected buyers / month</td><td className="px-4 py-3 text-right text-neutral-1 font-medium">{stats.buyers.toLocaleString()}</td></tr>
                      <tr><td className="px-4 py-3 text-neutral-5">Profit per sale</td><td className="px-4 py-3 text-right font-semibold text-emerald-700">{formatMoney(stats.profitPerSale_Growhubs, currency)}</td></tr>
                      <tr><td className="px-4 py-3 text-neutral-5">Estimated monthly profit</td><td className="px-4 py-3 text-right text-lg font-semibold text-emerald-700">{formatMoney(stats.mrr, currency)}</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="rounded-xl border border-neutral-11 overflow-visible">
                  <div className="px-4 py-3 bg-blue-950 text-neutral-1 font-medium rounded-tl-lg  rounded-tr-lg flex items-center gap-2">
                    <span>Other platforms (ads required)</span>
                    <InfoTip>
                      <p className="font-medium">How we estimate "ads required" costs</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Based on the average monthly ad budget a typical online coach invests across Google Ads, Facebook, Instagram, TikTok, and LinkedIn to drive cold traffic.</li>
                        <li>We translate ad spend into CAC using a blended CPC and a conservative purchase conversion rate (~2.5%): <span className="font-mono">CAC ~ CPC / Purchase CVR</span>.</li>
                        <li>These costs are effectively required on tool-only platforms (no built-in co-selling) such as Kajabi, Teachable, Thinkific, Skool, or HubSpot - because you must buy your own reach.</li>
                      </ul>
                      <p className="mt-3 font-medium">What this means in the table</p>
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Profit per sale (after ads) = <span className="font-mono">Price - CAC</span>; it can be negative when <span className="font-mono">CAC &gt; Price</span>.</li>
                        <li>Monthly profit uses your solo baseline buyers (from your own contacts only), not the shared Growhubs network.</li>
                      </ul>
                      <p className="mt-3 text-neutral-5">Notes: Benchmarks are illustrative; real results vary by niche, creatives, and funnel quality. Platform names are examples only.</p>
                    </InfoTip>
                  </div>
                  <table className="w-full text-sm">
                    <tbody className="divide-y divide-neutral-9">
                      <tr><td className="px-4 py-3 text-neutral-5">Blended CPC (USD)</td><td className="px-4 py-3 text-right font-medium text-neutral-5">{"$" + blendedCPC.toFixed(2)}</td></tr>
                      <tr><td className="px-4 py-3 text-neutral-5">CAC per sale (USD)</td><td className="px-4 py-3 text-right font-medium text-neutral-5">{"$" + (blendedCPC / Math.max(0.0001, purchaseCVR)).toFixed(0)}</td></tr>
                      <tr><td className="px-4 py-3 text-neutral-5">Price per membership</td><td className="px-4 py-3 text-right font-medium text-neutral-5">{formatMoney(price, currency)}</td></tr>
                      <tr><td className="px-4 py-3 text-neutral-5">Profit per sale (after ads)</td><td className="px-4 py-3 text-right font-semibold"><span className={stats.profitPerSale_Paid >= 0 ? 'text-emerald-700' : 'text-rose-600'}>{formatMoney(stats.profitPerSale_Paid, currency)}</span></td></tr>
                      <tr><td className="px-4 py-3 text-neutral-5">Expected buyers / month (solo)</td><td className="px-4 py-3 text-right text-neutral-5 font-medium">{stats.buyersSolo.toLocaleString()}</td></tr>
                      <tr><td className="px-4 py-3 text-neutral-5">Estimated monthly profit</td><td className="px-4 py-3 text-right text-lg font-semibold"><span className={(stats.monthlyProfitPaid >= 0 && stats.profitPerSale_Paid >= 0) ? 'text-emerald-700' : 'text-rose-600'}>{formatMoney(stats.monthlyProfitPaid, currency)}</span></td></tr>
                      <tr><td className="px-4 py-3 text-neutral-5">Outcome</td><td className="px-4 py-3 text-right font-medium"><span className={(stats.monthlyProfitPaid >= 0 && stats.profitPerSale_Paid >= 0) ? 'text-emerald-700' : 'text-rose-600'}>{(stats.monthlyProfitPaid >= 0 && stats.profitPerSale_Paid >= 0) ? 'Profit' : 'Loss'}</span></td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="mt-3 text-xs text-neutral-5">Solo baseline uses only your engaged contacts: buyersSolo = C * engagement * reachOwned * promos * CTR * CVR (rounded). Growhubs buyers come from network co-selling: buyers = N * r * F * CTR * CVR.</p>
            </div>

            <p className="mt-6 text-xs text-neutral-5 leading-relaxed">
              Assumptions: N=10,000; r=5%; F=50; CTR=8%; CVR=2.5%; blended CPC=$1.49; purchase CVR=2.5%; reachOwned=60%; promos=1. Break-even for paid ads is roughly price &gt;= CAC. Probability uses Poisson: P(&gt;=1) = 1 - exp(-lambda), lambda = expected sales from your contacts this month.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 mb-11">
              <ExplainerCard title="Instant reach" body={`${(N * (rPct / 100) * F).toLocaleString()} in-platform views when ${rPct}% co-sell your offer.`} />
              <ExplainerCard title="Simple viral step" body={`If everyone invites 1 person, the network grows from ${N.toLocaleString()} to ${(N * 2).toLocaleString()} members.`} />
              <ExplainerCard title="Your next move" body="Invite contacts and keep them engaged to grow intermediary commissions. Increase engagement to raise your chance of at least 1 commission." />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, sub, highlight }: StatCardProps) {
  return (
    <div className={`border border-neutral-11 rounded-xl px-4 py-8 text-neutral-50 flex flex-col gap-2 leading-normal `}>
      <p className="text-body-sm lg:text-body">{label}</p>
      <h2 className="text-h5 lg:text-h2 font-semibold">{value}</h2>
      <p className="text-body-sm lg:text-body">{sub}</p>
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

function SliderRow({ label, value, min, max, step, onChange, display }: SliderRowProps) {
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
        {prefix ? <span className="text-neutral-5">{prefix}</span> : null}
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

function ExplainerCard({ title, body }: ExplainerCardProps) {
  return (
    <div className="rounded-2xl border border-neutral-11 bg-transparent p-5">
      <div className="font-medium text-neutral-1">{title}</div>
      <p className="mt-2 text-neutral-5 text-sm">{body}</p>
    </div>
  );
}

function InfoTip({ children }: InfoTipProps) {
  const [pinned, setPinned] = React.useState(false);
  return (
    <span className="relative inline-flex items-center group">
      <button
        type="button"
        aria-label="More info"
        onClick={() => setPinned((v) => !v)}
        className="inline-flex items-center justify-center w-6 h-6 text-[12px] font-semibold rounded-full border border-neutral-11 text-neutral-5 bg-white hover:bg-neutral-50"
      >
        i
      </button>
      <div
        className={`absolute z-50 ${pinned ? 'block' : 'hidden group-hover:block'} w-[min(95vw,42rem)] p-4 text-[13px] text-neutral-5 bg-white border border-neutral-11 rounded-lg shadow-xl left-0 top-full mt-2 whitespace-normal leading-relaxed`}
      >
        <div className="flex items-start gap-3 pr-6">
          <div className="grow">{children}</div>
          <button
            type="button"
            aria-label="Close tooltip"
            className="ml-auto -mt-1 -mr-1 text-neutral-5 hover:text-neutral-5"
            onClick={() => setPinned(false)}
          >
            ×
          </button>
        </div>
      </div>
    </span>
  );
}