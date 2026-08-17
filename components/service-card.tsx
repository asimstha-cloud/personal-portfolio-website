import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/constants/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services#${service.slug}`}
      className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900/75 dark:hover:border-cyan-700"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-cyan-400/10 dark:text-cyan-300">
          <Icon className="size-5" aria-hidden />
        </span>
        <ArrowRight className="size-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600" />
      </div>
      <h3 className="mt-6 text-lg font-semibold text-slate-950 dark:text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.summary}</p>
    </Link>
  );
}
