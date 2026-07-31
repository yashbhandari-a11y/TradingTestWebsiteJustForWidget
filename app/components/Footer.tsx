import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { label: "X", href: "#" },
  { label: "in", href: "#" },
  { label: "ig", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">Northstar Capital</p>
          <p className="mt-2 max-w-md text-sm text-slate-400">
            Premium market intelligence for modern traders and growing institutions.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={`${item.label} social link`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-sm font-semibold text-slate-300 transition hover:border-blue-500 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-sm text-slate-500">
        © 2026 Northstar Capital. All rights reserved.
      </div>
    </footer>
  );
}
