import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

const variants = {
  primary:
    "bg-slate-950 text-white shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100",
  secondary:
    "border border-slate-200 bg-white/80 text-slate-900 shadow-sm hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
  ghost:
    "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10",
};

export function ButtonLink({
  className = "",
  variant = "primary",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`group inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-5 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" ? (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
      ) : null}
    </Link>
  );
}
