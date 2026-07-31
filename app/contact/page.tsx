import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SectionHeading } from "../components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Our Trading Team",
  description: "Reach out to Northstar Capital for trading support, product questions, or partnership conversations.",
};

const officeDetails = [
  { label: "Office Address", value: "18 Harbor Avenue, Marine Quay, Mumbai 400001" },
  { label: "Email", value: "hello@northstarcapital.com" },
  { label: "Phone", value: "+91 22 4100 2020" },
  { label: "Business Hours", value: "Mon–Fri • 9:00 AM to 6:00 PM" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="pt-24">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <SectionHeading
                eyebrow="Contact us"
                title="Let’s build a smarter trading relationship"
                description="Whether you are exploring market opportunities or looking for a strategic partner, our team is ready to assist."
              />
              <div className="mt-8 space-y-4">
                {officeDetails.map((detail) => (
                  <div key={detail.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm font-semibold text-slate-500">{detail.label}</p>
                    <p className="mt-1 text-base text-slate-800">{detail.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">Visit our office</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Our team is based in central Mumbai, offering a professional environment for consultations, onboarding, and strategic conversations.
                </p>
              </div>
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-100 p-4 text-center">
                <Image src="/market-chart.svg" alt="Google Maps placeholder illustration" width={720} height={420} className="w-full rounded-[1rem]" />
                <p className="mt-4 text-sm font-medium text-slate-500">Google Maps Placeholder</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
