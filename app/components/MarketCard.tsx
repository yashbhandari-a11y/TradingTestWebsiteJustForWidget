type MarketCardProps = {
  symbol: string;
  value: string;
  change: string;
};

export function MarketCard({ symbol, value, change }: MarketCardProps) {
  const isPositive = change.startsWith("+");

  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:border-blue-300 hover:bg-blue-50/60">
      <p className="text-sm font-medium text-slate-500">{symbol}</p>
      <p className="mt-4 text-2xl font-semibold text-slate-900">{value}</p>
      <p className={`mt-3 text-sm font-semibold ${isPositive ? "text-emerald-600" : "text-rose-500"}`}>
        {change}
      </p>
    </div>
  );
}
