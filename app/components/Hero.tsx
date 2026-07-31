import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-blue-300" />
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-blue-50 backdrop-blur">
            Trusted by modern traders
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Trade smarter with data-driven market clarity.
          </h1>
          <p className="mt-6 text-lg leading-8 text-blue-50/90 sm:text-xl">
            Unlock real-time insights and strategic opportunities with a premium trading platform built for confident decisions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Markets
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur">
          <Image
            src="/trading-hero.svg"
            alt="Financial growth illustration"
            width={640}
            height={480}
            priority
            className="w-full rounded-[1.5rem]"
          />
        </div>
      </div>
    </section>
  );
}
