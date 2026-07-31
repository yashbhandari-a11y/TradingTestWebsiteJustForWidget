import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}
