import Link from "next/link";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/75 py-12 dark:border-slate-800 dark:bg-slate-950/75">
      <div className="container-page grid gap-10 md:grid-cols-[1.3fr_.7fr_.9fr]">
        <div>
          <div className="flex items-center gap-3 font-semibold text-slate-950 dark:text-white">
            <span className="grid size-10 place-items-center rounded-2xl bg-premium-gradient text-sm text-white">
              AS
            </span>
            <span>{siteConfig.name}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
            AI marketing consulting for businesses that want sharper strategy, cleaner execution,
            and measurable growth.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Quick Links</h2>
          <div className="mt-4 grid gap-3 text-sm">
            <Link href="/" className="text-slate-600 hover:text-blue-600 dark:text-slate-300">
              Home
            </Link>
            <Link href="/services" className="text-slate-600 hover:text-blue-600 dark:text-slate-300">
              Services
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-blue-600 dark:text-slate-300">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Contact Information
          </h2>
          <div className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
            <a href={`mailto:${siteConfig.email}`} className="flex gap-3 hover:text-blue-600">
              <Mail className="mt-0.5 size-4" /> {siteConfig.email}
            </a>
            <p className="flex gap-3">
              <Phone className="mt-0.5 size-4" /> {siteConfig.phones.join(" / ")}
            </p>
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-4" /> {siteConfig.location}
            </p>
          </div>
        </div>
      </div>
      <div className="container-page mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <a href="#top" className="inline-flex items-center gap-2 font-medium text-blue-600">
          Back To Top <ArrowUp className="size-4" />
        </a>
      </div>
    </footer>
  );
}
