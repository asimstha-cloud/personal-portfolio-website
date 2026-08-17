"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/constants/site";
import { ButtonLink } from "@/components/button-link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/75">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <Image
            src="/asim-tech-light.png"
            alt={siteConfig.name}
            width={212}
            height={40}
            className="h-10 w-auto dark:hidden"
            priority
          />
          <Image
            src="/asim-tech-dark.png"
            alt={siteConfig.name}
            width={212}
            height={40}
            className="hidden h-10 w-auto dark:block"
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/70 p-1 shadow-sm dark:border-white/10 dark:bg-white/5 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <ButtonLink href="/contact" className="min-h-10 px-4">
            Contact
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-xl dark:border-white/10 dark:bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/contact" onClick={() => setOpen(false)}>
              Contact Me
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
