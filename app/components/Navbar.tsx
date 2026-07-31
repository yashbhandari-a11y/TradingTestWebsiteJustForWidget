"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Northstar Capital home">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-600/20">
            NC
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">Northstar Capital</p>
            <p className="text-xs text-slate-500">Institutional Trading</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-blue-500 hover:text-blue-600 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
