import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SectionHeading } from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "About Our Trading Company",
  description: "Learn about Northstar Capital’s mission, vision, values, and the experience behind our modern trading platform.",
};

const values = [
  { title: "Integrity", description: "We believe transparent practices create enduring trust." },
  { title: "Precision", description: "Every decision is informed by data, insight, and disciplined execution." },
  { title: "Innovation", description: "We continuously improve our approach with modern market intelligence." },
];

const timeline = [
  { year: "2018", title: "Founded", description: "Northstar Capital launched with a sharper focus on modern market strategy." },
  { year: "2021", title: "Expanded Platform", description: "We introduced richer analytics and a more refined client experience." },
  { year: "2024", title: "Global Reach", description: "Our client network grew across retail and institutional trading communities." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="pt-24">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div>
              <SectionHeading
                eyebrow="About Northstar"
                title="A modern trading company built on insight, trust, and execution"
                description="We deliver a premium experience for investors who expect rigorous analysis, clear communication, and dependable guidance in fast-moving markets."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-50 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">Mission</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    To help clients make informed decisions through disciplined market intelligence and responsive support.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">Vision</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    To set a new standard for digital trading experiences defined by clarity, performance, and trust.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
              <Image src="/trading-hero.svg" alt="Company growth illustration" width={640} height={480} className="w-full rounded-[1rem]" />
            </div>
          </div>
        </section>

        <section className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Core values"
              title="The principles behind every client experience"
              description="Our culture is shaped by a clear commitment to excellence, accountability, and human-centered service."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Company timeline"
              title="Growth shaped by strategy and innovation"
              description="Our journey reflects a steady commitment to building a more insightful and professional trading environment."
            />
            <div className="mt-10 space-y-6">
              {timeline.map((entry) => (
                <div key={entry.year} className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-start md:gap-8">
                  <div className="min-w-[90px] text-lg font-semibold text-blue-600">{entry.year}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{entry.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{entry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
