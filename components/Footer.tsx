import Link from "next/link";
import { site, navItems } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-purple-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-display text-2xl font-bold">
            {site.name}
          </p>

          <p className="mt-3 max-w-xl text-sm leading-6 text-purple-100">
            Helping people in Blackpool with mental and social wellbeing through
            music, confidence, connection and the joy of singing.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-200">
            Pages
          </p>

          <div className="mt-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-purple-100 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-purple-200">
            Contact
          </p>

          <div className="mt-4 flex flex-col gap-2 text-sm text-purple-100">
            <a href={"tel:" + site.phone} className="hover:text-white">
              {site.displayPhone}
            </a>

            <a
              href={"mailto:" + site.email}
              className="break-all hover:text-white"
            >
              {site.email}
            </a>

            <span>{site.location}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6">
        <p className="text-sm text-purple-200">
          © {new Date().getFullYear()} Crystal Dreams Singing Group. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}