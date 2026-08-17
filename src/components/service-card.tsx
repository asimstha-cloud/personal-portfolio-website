import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { services } from "@/constants/site";
import { MotionArticle } from "@/components/motion";

type Service = (typeof services)[number];

export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const Icon = service.icon;

  return (
    <MotionArticle
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.2) }}
      className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-white/[0.04]"
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.accent}`}
      />
      <div className="flex items-start justify-between gap-4">
        <div
          className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg shadow-blue-500/15`}
        >
          <Icon className="size-5" />
        </div>
        <ArrowRight className="mt-2 size-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600 dark:text-slate-600 dark:group-hover:text-cyan-300" />
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {service.summary}
      </p>
      <Link
        href={`/services#${service.slug}`}
        className="absolute inset-0 rounded-[28px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        aria-label={`View ${service.title}`}
      />
    </MotionArticle>
  );
}
