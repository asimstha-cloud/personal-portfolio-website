import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/button";
import { Reveal, SectionHeading } from "@/components/motion";
import { ServiceCard } from "@/components/service-card";
import { proofPoints, services, whyWork } from "@/constants/services";
import { siteConfig } from "@/lib/site";

const testimonials = [
  {
    quote:
      "Asim helped us turn scattered marketing activity into a clear growth plan with practical AI workflows.",
    name: "Founder",
    role: "Local service brand",
  },
  {
    quote:
      "The reporting became easier to understand, and our campaigns finally had a clean decision process.",
    name: "Marketing Lead",
    role: "Growth company",
  },
  {
    quote:
      "Strategic, responsive, and focused on outcomes. The recommendations were easy for our team to act on.",
    name: "Director",
    role: "Professional services",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[linear-gradient(115deg,rgba(37,99,235,.16),rgba(124,58,237,.12),rgba(6,182,212,.12))]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-20 z-0 hidden h-[34rem] w-1/2 max-w-3xl opacity-70 lg:block"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,.12)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_left,black,transparent)] dark:bg-[linear-gradient(to_right,rgba(6,182,212,.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,58,237,.12)_1px,transparent_1px)]" />
          <div className="absolute right-20 top-8 h-72 w-72 rounded-full border border-blue-300/30 dark:border-cyan-300/20" />
          <div className="absolute right-44 top-28 h-44 w-44 rounded-[2rem] border border-purple-300/30 rotate-12 dark:border-purple-300/20" />
          <div className="absolute right-28 top-24 h-px w-72 rotate-[-18deg] bg-gradient-to-r from-transparent via-blue-400/45 to-transparent dark:via-cyan-300/35" />
          <div className="absolute right-52 top-56 h-px w-64 rotate-[24deg] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
          <div className="absolute right-24 top-64 h-px w-56 rotate-[-32deg] bg-gradient-to-r from-transparent via-cyan-400/45 to-transparent" />
          <div className="absolute right-72 top-28 size-2 rounded-full bg-blue-500 shadow-[0_0_22px_rgba(37,99,235,.7)] animate-pulse" />
          <div className="absolute right-44 top-48 size-2 rounded-full bg-cyan-400 shadow-[0_0_22px_rgba(6,182,212,.7)] animate-pulse [animation-delay:500ms]" />
          <div className="absolute right-80 top-72 size-2 rounded-full bg-purple-500 shadow-[0_0_22px_rgba(124,58,237,.65)] animate-pulse [animation-delay:900ms]" />
          <div className="absolute right-20 top-40 size-1.5 rounded-full bg-cyan-400/80 animate-pulse [animation-delay:1200ms]" />
        </div>
        <div className="container-page relative z-10">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur dark:border-cyan-400/20 dark:bg-slate-900/70 dark:text-cyan-200">
              <Sparkles className="size-4" /> AI-powered growth consulting
            </div>
            <h1 className="mt-7 text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
              Asim Shrestha
            </h1>
            <p className="mt-4 text-xl font-medium text-blue-600 dark:text-cyan-300">
              {siteConfig.title}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              I help businesses combine AI, SEO, paid media, automation, and analytics into a
              practical marketing system built for clarity and measurable growth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Contact Me</ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                View Services <ArrowRight className="ml-2 size-4" />
              </ButtonLink>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {proofPoints.map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/55">
                  <dt className="text-xs uppercase tracking-[0.16em] text-slate-500">{item.label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-950 dark:text-white">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <SectionHeading
            eyebrow="About"
            title="A modern marketing partner for AI-era growth."
            text="Asim works across strategy, search, paid media, content, analytics, and automation to help businesses make better marketing decisions with less noise."
          />
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {["AI marketing systems", "SEO and local visibility", "Paid campaign strategy", "Analytics and reporting"].map((skill) => (
              <div key={skill} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                <CheckCircle2 className="size-5 text-blue-600 dark:text-cyan-300" />
                <p className="mt-4 font-semibold text-slate-950 dark:text-white">{skill}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Services"
            title="Consulting services built around measurable growth."
            text="Choose focused support for a single channel or connect the full marketing system across strategy, traffic, conversion, and reporting."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <SectionHeading
            centered
            eyebrow="Why Work With Me"
            title="Senior thinking, simple communication, focused execution."
            text="The work stays practical: clear priorities, useful measurement, and AI applied where it creates real leverage."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyWork.map((item) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title}>
                  <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                    <Icon className="size-6 text-blue-600 dark:text-cyan-300" />
                    <h3 className="mt-5 font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Testimonials"
            title="Placeholder feedback ready for real client stories."
            text="These cards are structured so authentic testimonials can be swapped in quickly when available."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Reveal key={testimonial.name + testimonial.role}>
                <figure className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                  <blockquote className="text-sm leading-7 text-slate-700 dark:text-slate-200">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-6">
                    <p className="font-semibold text-slate-950 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="container-page">
          <div className="overflow-hidden rounded-[2rem] bg-premium-gradient p-8 text-white shadow-glow sm:p-12">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">Ready to grow</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Build a sharper marketing system with AI, strategy, and performance clarity.
              </h2>
              <p className="mt-4 text-blue-50">
                Start with a conversation about your goals, current bottlenecks, and the best next move.
              </p>
              <ButtonLink href="/contact" variant="secondary" className="mt-7">
                Contact Me
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
