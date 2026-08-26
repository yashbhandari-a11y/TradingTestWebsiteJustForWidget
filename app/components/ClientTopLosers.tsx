"use client";
import React, { useEffect, useState } from "react";

type AnyItem = any;

export default function ClientTopLosers() {
  const [data, setData] = useState<AnyItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      try {
        const res = await fetch("/api/top-losers");
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const json = await res.json();
        if (!mounted) return;
        setData(json);
      } catch (err: any) {
        if (!mounted) return;
        setError(err?.message ?? String(err));
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div className="text-center text-slate-600">Loading client-side data…</div>;
  if (error) return <div className="text-center text-red-600">Error: {error}</div>;

  // Simplified: render raw JSON response
  return (
    <div className="mx-auto max-w-7xl">
      <pre className="whitespace-pre-wrap text-sm text-slate-600">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
