"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Music2, Phone, X } from "lucide-react";
import { useState } from "react";
import { navItems, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Crystal Dreams Singing Group home"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-950 via-fuchsia-700 to-amber-400 text-white shadow-lg shadow-purple-900/20">
            <Music2 className="h-6 w-6" />
          </div>

          <div>
            <p className="font-display text-lg font-bold leading-5 text-purple-950">
              Crystal Dreams
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-700">
              Singing Group
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;

            const linkClass = active
              ? "text-sm font-semibold text-purple-950"
              : "text-sm font-semibold text-slate-700 transition hover:text-purple-900";

            return (
              <Link key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={"tel:" + site.phone}
          className="hidden items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-sm font-bold text-purple-900 transition hover:bg-purple-100 lg:inline-flex"
        >
          <Phone className="h-4 w-4" />
          Call Hannah
        </a>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-purple-50 text-purple-950 lg:hidden"
          aria-label="Open navigation menu"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-purple-100 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 hover:bg-purple-50 hover:text-purple-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}