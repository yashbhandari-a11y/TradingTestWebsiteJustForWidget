import Link from "next/link";

export function CTASection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-blue-600 px-8 py-16 text-center text-white shadow-2xl shadow-blue-600/20 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-semibold sm:text-4xl">Ready to elevate your trading strategy?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
          Partner with Northstar Capital to access premium insights, disciplined execution, and a trusted team that understands markets.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">
            Contact Us
          </Link>
          <Link href="/about" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
