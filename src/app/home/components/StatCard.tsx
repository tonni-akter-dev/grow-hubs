import React from 'react'

const StatCard = () => {
    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard label="Platform members" value={`${N.toLocaleString()}+`} sub="Total members in Growhubs" />
            <StatCard label="Expected buyers / month" value={stats.buyers.toLocaleString()} sub="From co-selling network" highlight />
            <StatCard label={`Est. MRR at ${formatMoney(price, currency)}/mo`} value={formatMoney(stats.mrr, currency)} sub="From membership sales" />
            <StatCard label="Earn w/o a product" value={formatMoney(stats.cosellerEarnings, currency)} sub="Intermediary commissions" />
        </div>
    )
}

export default StatCard
