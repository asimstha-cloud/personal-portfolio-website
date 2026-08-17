import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { FAQ } from "@/components/faq";
import { SectionHeading } from "@/components/section-heading";
import { faqs, siteConfig } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Asim Shrestha for AI marketing consulting, SEO, ads, content, automation, analytics, and website strategy.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-900/45">
        <div className="absolute inset-0 ai-grid opacity-70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let us talk about your next growth move."
            description="Share what you are building, where marketing feels stuck, and which service you are considering."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="grid content-start gap-5">
              <ContactCard
                icon={Mail}
                title="Email"
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
              />
              <ContactCard
                icon={Phone}
                title="Phone"
                value={siteConfig.phones.join(" / ")}
                href={`tel:${siteConfig.phones[0]}`}
              />
              <ContactCard
                icon={MapPin}
                title="Location"
                value={siteConfig.location}
              />
              <ContactCard
                icon={Clock}
                title="Business Hours"
                value="Sunday - Friday, 9:00 AM - 6:00 PM"
              />
              <div className="min-h-64 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
                <div className="grid h-full min-h-64 place-items-center bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.18),transparent_32%),radial-gradient(circle_at_80%_60%,rgba(6,182,212,0.18),transparent_32%),linear-gradient(135deg,#f8fafc,#e2e8f0)] p-6 text-center dark:bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_32%),radial-gradient(circle_at_80%_60%,rgba(34,211,238,0.16),transparent_32%),linear-gradient(135deg,#020617,#0f172a)]">
                  <div>
                    <MapPin className="mx-auto size-8 text-blue-600 dark:text-cyan-300" />
                    <p className="mt-4 font-semibold text-slate-950 dark:text-white">
                      Google Map Placeholder
                    </p>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Ranibari, Kathmandu, Nepal
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="A few helpful answers." />
        <div className="mt-12">
          <FAQ items={faqs} />
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: typeof Mail;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-white/[0.04]">
      <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-blue-600 text-white dark:bg-cyan-400 dark:text-slate-950">
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
          {title}
        </p>
        <p className="mt-1 font-semibold text-slate-950 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}
