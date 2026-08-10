import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "./components/CTASection";
import { FeatureCard } from "./components/FeatureCard";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MarketCard } from "./components/MarketCard";
import { Navbar } from "./components/Navbar";
import { SectionHeading } from "./components/SectionHeading";
import {PlanifyWidget,WidgetFullSizeComponent} from "./components/WidgetComponent";

export const metadata: Metadata = {
  title: "Professional Trading Platform",
  description: "Northstar Capital offers premium trading insights, market analytics, and secure investment strategies for modern professionals.",
};

const features = [
  {
    title: "Real-Time Insights",
    description: "Stay ahead with instant market signals and data-driven analysis tailored to your strategy.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M7 15l3-4 3 2 4-6" />
      </svg>
    ),
  },
  {
    title: "Smart Investments",
    description: "Access structured opportunities designed to balance growth, resilience, and long-term performance.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 18V10m8 8V6m8 12v-5" />
      </svg>
    ),
  },
  {
    title: "Market Analytics",
    description: "Explore robust research, trend mapping, and portfolio-level signals with a premium lens.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 18h14M7 14l3-3 2 2 5-6" />
      </svg>
    ),
  },
  {
    title: "Secure Trading",
    description: "Operate with confidence using disciplined processes and protection-first operational standards.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v5c0 4.2-2.7 7.6-7 9-4.3-1.4-7-4.8-7-9V7l7-4z" />
      </svg>
    ),
  },
];

const highlights = [
  { symbol: "NIFTY 50", value: "25,120.40", change: "+0.85%" },
  { symbol: "SENSEX", value: "82,450.15", change: "+0.64%" },
  { symbol: "BANK NIFTY", value: "56,120.25", change: "-0.15%" },
];

const reasons = [
  "Trusted advisory backed by disciplined research and market discipline.",
  "Tailored execution frameworks for traders seeking consistency and control.",
  "Premium client support with clear communication and transparent guidance.",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="pt-24">
        <Hero />

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Why traders choose us"
              title="Professional tools for confident market decisions"
              description="From active trading to long-term portfolio planning, every experience is designed with precision, clarity, and control in mind."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Market highlights"
              title="A snapshot of today’s key indices"
              description="Static market indicators to reflect the type of information our platform surfaces for investors."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {highlights.map((item) => (
                <MarketCard key={item.symbol} symbol={item.symbol} value={item.value} change={item.change} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_0.9fr] lg:p-12">
            <div>
              <SectionHeading
                eyebrow="Why choose us"
                title="Built for premium performance and professional execution"
                description="We combine modern technology with institutional-grade process flow to help clients move with confidence."
              />
              <div className="mt-8 space-y-4">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-3 rounded-2xl bg-blue-50/70 p-4">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-600" />
                    <p className="text-sm leading-7 text-slate-700">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
              <Image src="/market-chart.svg" alt="Trade growth chart illustration" width={640} height={480} className="w-full rounded-[1rem]" />
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-7xl">
            <SectionHeading
              eyebrow="Experience the difference"
              title="Explore our platform with a free demo account"
              description="Get a hands-on feel for our tools, insights, and execution framework with a risk-free demo account."
            />
            <div className="mt-10 min-h-100% min-w-100% flex justify-center">
              <PlanifyWidget />
            </div>
            {/* <div className="mt-10 min-h-100% min-w-100% flex justify-center"> */}
              <WidgetFullSizeComponent />
            {/* </div> */}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
