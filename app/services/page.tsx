import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Reveal } from "@/components/motion";
import { services } from "@/constants/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI marketing strategy, SEO, local SEO, Google Business Profile, paid ads, automation, analytics, and website strategy services.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="container-page">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Services</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              Full-funnel AI marketing services for growth-focused businesses.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Each service is designed as a focused engagement with clear benefits, a practical
              process, expected outcomes, and an easy path to start.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page grid gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={Math.min(index * 0.02, 0.16)}>
                <article
                  id={service.slug}
                  className="scroll-mt-24 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
                >
                  <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[.95fr_1.05fr] lg:p-10">
                    <div>
                      <div className="grid size-14 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-cyan-400/10 dark:text-cyan-300">
                        <Icon className="size-6" aria-hidden />
                      </div>
                      <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                        {service.description}
                      </p>
                      <ButtonLink href="/contact" className="mt-7">
                        Discuss this service <ArrowRight className="ml-2 size-4" />
                      </ButtonLink>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                      <ServiceList title="Benefits" items={service.benefits} />
                      <ServiceList title="Process" items={service.process} />
                      <ServiceList title="Expected Results" items={service.results} />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="rounded-[2rem] bg-premium-gradient p-8 text-white shadow-glow sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">Next Step</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Not sure which service fits?
            </h2>
            <p className="mt-4 max-w-3xl text-blue-50">
              Book a consultation and we can identify the strongest growth lever based on your
              current marketing, budget, and goals.
            </p>
            <ButtonLink href="/contact" variant="secondary" className="mt-8">
              Contact Me
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/55">
      <h3 className="font-semibold text-slate-950 dark:text-white">{title}</h3>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-600 dark:text-cyan-300" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
