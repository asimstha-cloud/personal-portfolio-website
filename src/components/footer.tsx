import {
  ArrowUp,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-400 text-sm font-bold text-white">
              AS
            </span>
            <div>
              <p className="font-semibold text-slate-950 dark:text-white">
                {siteConfig.name}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {siteConfig.title}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
            AI-powered marketing strategy, SEO, advertising, automation, and
            consulting for businesses ready to grow with clarity.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:text-blue-700 dark:border-white/10 dark:text-slate-300 dark:hover:text-cyan-200"
            >
              <Globe2 className="size-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:text-blue-700 dark:border-white/10 dark:text-slate-300 dark:hover:text-cyan-200"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Quick Links
          </h3>
          <div className="mt-5 grid gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-700 dark:text-slate-300 dark:hover:text-cyan-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
            Contact
          </h3>
          <div className="mt-5 grid gap-4 text-sm text-slate-600 dark:text-slate-300">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 transition hover:text-blue-700 dark:hover:text-cyan-200"
            >
              <Mail className="size-4" />
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phones[0]}`}
              className="flex items-center gap-3 transition hover:text-blue-700 dark:hover:text-cyan-200"
            >
              <Phone className="size-4" />
              {siteConfig.phones.join(" / ")}
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="size-4" />
              {siteConfig.location}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-slate-200 px-4 py-6 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:px-6 lg:px-8">
        <p>
          Copyright {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 rounded-full px-3 py-2 font-medium text-slate-600 transition hover:bg-slate-100 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-cyan-200"
        >
          <ArrowUp className="size-4" />
          Back To Top
        </a>
      </div>
    </footer>
  );
}
