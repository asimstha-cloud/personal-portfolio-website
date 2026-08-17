import { ArrowRight, BarChart3, CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { MotionDiv, MotionSection } from "@/components/motion";

const stats = [
  { value: "8+", label: "Years expertise" },
  { value: "12", label: "Growth services" },
  { value: "95+", label: "Performance target" },
];

export function HomeHero() {
  return (
    <MotionSection
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="relative isolate overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_75%_20%,rgba(6,182,212,0.18),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] dark:border-white/10 dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_34%),radial-gradient(circle_at_75%_20%,rgba(34,211,238,0.13),transparent_30%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]"
    >
      <div className="absolute inset-0 -z-10 ai-grid opacity-70" />
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur dark:border-cyan-300/20 dark:bg-white/10 dark:text-cyan-200"
          >
            <Sparkles className="size-4" />
            AI Marketing Expert & Consultant
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
              Asim Shrestha
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700 dark:text-slate-200">
              Helping ambitious businesses use AI, SEO, advertising, content,
              and analytics to build smarter marketing systems.
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="/contact">
              Contact Me <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              View Services
            </ButtonLink>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-10 grid max-w-xl grid-cols-3 gap-3"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[24px] border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.06]"
              >
                <p className="text-2xl font-semibold text-slate-950 dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </MotionDiv>
        </div>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -inset-6 rounded-[40px] bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-cyan-400/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/75 p-3 shadow-2xl shadow-blue-500/15 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
            <Image
              src="/asim-ai-portrait.webp"
              alt="AI-inspired professional portrait placeholder for Asim Shrestha"
              width={960}
              height={1120}
              priority
              className="aspect-[6/7] w-full rounded-[28px] object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/70 bg-white/85 p-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-950/75">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-2xl bg-blue-600 text-white">
                  <BarChart3 className="size-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-950 dark:text-white">
                    Growth systems with AI clarity
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-300">
                    <CheckCircle2 className="size-3 text-emerald-500" />
                    Strategy, execution, and reporting aligned
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
