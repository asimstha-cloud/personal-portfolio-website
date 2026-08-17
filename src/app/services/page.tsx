import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { MotionArticle } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { services, siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI marketing strategy, SEO, local SEO, ads, content, automation, analytics, and website strategy services by Asim Shrestha.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 py-24 dark:border-white/10 dark:bg-slate-900/45">
        <div className="absolute inset-0 ai-grid opacity-70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Services"
            title="Comprehensive marketing services for AI-powered growth."
            description="Each service is built as a clear, measurable engagement with practical process, useful deliverables, and a direct path toward better performance."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <MotionArticle
                id={service.slug}
                key={service.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.55 }}
                className="scroll-mt-28 overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
              >
                <div className={`h-2 bg-gradient-to-r ${service.accent}`} />
                <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
                  <div>
                    <div
                      className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg shadow-blue-500/15`}
                    >
                      <Icon className="size-6" />
                    </div>
                    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-300">
                      Service {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                      {service.title}
                    </h2>
                    <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
                      {service.description}
                    </p>
                    <div className="mt-8">
                      <ButtonLink href="/contact">
                        Discuss {service.title}{" "}
                        <ArrowRight className="size-4" />
                      </ButtonLink>
                    </div>
                  </div>

                  <div className="grid gap-5">
                    <InfoPanel title="Benefits" items={service.benefits} />
                    <InfoPanel
                      title="Process"
                      items={service.process}
                      ordered
                    />
                    <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-950/50">
                      <h3 className="font-semibold text-slate-950 dark:text-white">
                        Expected Results
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {service.results}
                      </p>
                    </div>
                  </div>
                </div>
              </MotionArticle>
            );
          })}
        </div>
      </section>
    </>
  );
}

function InfoPanel({
  title,
  items,
  ordered = false,
}: {
  title: string;
  items: string[];
  ordered?: boolean;
}) {
  const List = ordered ? "ol" : "ul";

  return (
    <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-950/50">
      <h3 className="font-semibold text-slate-950 dark:text-white">{title}</h3>
      <List className="mt-4 grid gap-3">
        {items.map((item, index) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300"
          >
            {ordered ? (
              <span className="grid size-7 shrink-0 place-items-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                {index + 1}
              </span>
            ) : (
              <CheckCircle2 className="mt-1 size-5 shrink-0 text-emerald-500" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </List>
    </div>
  );
}
