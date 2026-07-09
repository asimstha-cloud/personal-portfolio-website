import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FAQ } from "@/components/faq";
import { Reveal, SectionHeading } from "@/components/motion";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Asim Shrestha for AI marketing strategy, SEO, paid advertising, automation, analytics, and consulting.",
  alternates: {
    canonical: "/contact",
  },
};

const faqs = [
  {
    question: "What happens after I submit the form?",
    answer:
      "Asim will review your message and follow up with practical next steps based on your goals and service needs.",
  },
  {
    question: "Can I request a custom marketing plan?",
    answer:
      "Yes. Strategy engagements can be tailored around your business model, current channels, budget, and timeline.",
  },
  {
    question: "Do you work with local businesses in Kathmandu?",
    answer:
      "Yes. Local SEO, Google Business Profile optimization, and consultation are available for Kathmandu-based businesses.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[.82fr_1.18fr]">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl">
              Let’s talk about your next growth move.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Share your goals, current marketing challenge, and the service you are considering.
            </p>

            <div className="mt-8 grid gap-4">
              <ContactItem icon={Mail} label="Email" value={siteConfig.email} href={`mailto:${siteConfig.email}`} />
              <ContactItem icon={Phone} label="Phone" value={siteConfig.phones.join(" / ")} />
              <ContactItem icon={MapPin} label="Location" value={siteConfig.location} />
              <ContactItem icon={Clock} label="Business Hours" value="Sunday - Friday, 9:00 AM - 6:00 PM" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="grid min-h-[360px] place-items-center rounded-[2rem] border border-slate-200 bg-[linear-gradient(135deg,rgba(37,99,235,.12),rgba(6,182,212,.12))] p-8 text-center shadow-sm dark:border-slate-800 dark:bg-[linear-gradient(135deg,rgba(37,99,235,.16),rgba(124,58,237,.14))]">
              <div>
                <MapPin className="mx-auto size-10 text-blue-600 dark:text-cyan-300" />
                <h2 className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white">
                  Google Map Placeholder
                </h2>
                <p className="mt-3 text-slate-600 dark:text-slate-300">
                  Ranibari, Kathmandu, Nepal
                </p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="A few quick answers before we start."
              text="These placeholders can be expanded as the business process becomes more specific."
            />
            <div className="mt-8">
              <FAQ items={faqs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid size-11 place-items-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-cyan-400/10 dark:text-cyan-300">
        <Icon className="size-5" />
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</span>
        <span className="mt-1 block font-medium text-slate-950 dark:text-white">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-blue-200 dark:border-slate-800 dark:bg-slate-900/70">
        {content}
      </a>
    );
  }

  return (
    <div className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
      {content}
    </div>
  );
}
