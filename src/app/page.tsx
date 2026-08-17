import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { FAQ } from "@/components/faq";
import { MotionDiv, MotionSection } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { HomeHero } from "@/components/sections/home-hero";
import { faqs, reasons, services, testimonials } from "@/constants/site";

export default function Home() {
  return (
    <>
      <HomeHero />
      <AboutPreview />
      <ServicesPreview />
      <WhyWorkWithMe />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  );
}

function AboutPreview() {
  const skills = [
    "AI strategy",
    "SEO",
    "Paid ads",
    "Content systems",
    "Analytics",
  ];

  return (
    <MotionSection
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"
    >
      <div>
        <SectionHeading
          align="left"
          eyebrow="About"
          title="Marketing direction for the AI era."
          description="Asim helps businesses modernize marketing with practical AI workflows, stronger search visibility, better campaigns, and reporting that makes decisions easier."
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
          <p className="text-5xl font-semibold tracking-tight text-slate-950 dark:text-white">
            8+
          </p>
          <p className="mt-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
            Years of expertise placeholder
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Experience across strategy, acquisition, local growth, campaign
            planning, and marketing operations.
          </p>
        </div>
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-300">
            Skills
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function ServicesPreview() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900/45">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="A complete marketing growth stack."
          description="From strategy to automation, every service is designed to connect brand clarity, acquisition, conversion, and performance insight."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/services" variant="secondary">
            Explore All Services <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

function WhyWorkWithMe() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Why Work With Me"
        title="Calm strategy, sharp execution, measurable progress."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <MotionDiv
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <Icon className="size-6 text-blue-600 dark:text-cyan-300" />
              <h3 className="mt-5 font-semibold text-slate-950 dark:text-white">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {reason.description}
              </p>
            </MotionDiv>
          );
        })}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Placeholder feedback ready for real client stories."
          description="These examples are structured so genuine testimonials can be dropped in quickly."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.quote}
              className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10">
                <p className="font-semibold text-slate-950 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="bg-slate-50 px-4 py-24 dark:bg-slate-900/45 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="FAQ" title="Straight answers before we talk." />
      <div className="mt-12">
        <FAQ items={faqs} />
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[36px] bg-slate-950 p-8 text-white shadow-2xl shadow-blue-500/20 dark:bg-white dark:text-slate-950 sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 dark:text-blue-700">
              <CheckCircle2 className="size-4" />
              Ready for smarter growth
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build a marketing system that compounds.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300 dark:text-slate-600">
              Share your goals, current challenges, and the service you need.
              You&apos;ll get a clear next step.
            </p>
          </div>
          <ButtonLink
            href="/contact"
            className="bg-white text-slate-950 dark:bg-slate-950 dark:text-white"
          >
            Contact Me <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
