"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-white/10 dark:bg-white/10 dark:text-slate-100 dark:hover:text-cyan-200"
    >
      <Moon className="size-4 dark:hidden" />
      <Sun className="hidden size-4 dark:block" />
    </button>
  );
}
