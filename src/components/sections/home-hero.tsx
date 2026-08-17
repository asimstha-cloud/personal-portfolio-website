import { ArrowRight, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { MotionDiv, MotionSection } from "@/components/motion";

const stats = [
  { value: "8+", label: "Years expertise" },
  { value: "12", label: "Growth services" },
  { value: "95+", label: "Performance target" },
];

const aiNodes = [
  "left-[14%] top-[24%] size-3 bg-blue-500/80 shadow-blue-500/40",
  "left-[28%] top-[64%] size-2.5 bg-cyan-400/80 shadow-cyan-400/40",
  "left-[45%] top-[36%] size-3.5 bg-sky-500/80 shadow-sky-500/40",
  "left-[61%] top-[72%] size-2.5 bg-indigo-500/80 shadow-indigo-500/40",
  "left-[76%] top-[28%] size-3 bg-cyan-400/80 shadow-cyan-400/40",
  "left-[86%] top-[58%] size-2 bg-blue-500/80 shadow-blue-500/40",
];

const aiLines = [
  "left-[16%] top-[28%] w-[34%] rotate-[17deg]",
  "left-[30%] top-[61%] w-[35%] -rotate-[33deg]",
  "left-[46%] top-[39%] w-[33%] -rotate-[12deg]",
  "left-[62%] top-[69%] w-[27%] rotate-[25deg]",
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
          <div
            aria-hidden="true"
            className="relative min-h-[430px] overflow-hidden rounded-[36px] border border-white/80 bg-white/65 shadow-2xl shadow-blue-500/15 backdrop-blur dark:border-white/10 dark:bg-white/[0.06] sm:min-h-[540px]"
          >
            <div className="absolute inset-0 ai-grid opacity-75" />
            <div className="absolute inset-8 rounded-[30px] border border-blue-200/60 dark:border-cyan-300/10" />
            <div className="absolute inset-16 rounded-full border border-dashed border-blue-300/50 dark:border-cyan-300/20" />
            <div className="absolute left-1/2 top-1/2 grid size-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-blue-200/70 bg-white/80 shadow-2xl shadow-blue-500/20 backdrop-blur dark:border-cyan-300/20 dark:bg-slate-950/75 sm:size-40">
              <div className="grid size-16 grid-cols-3 gap-1.5 sm:size-20">
                {Array.from({ length: 9 }).map((_, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 opacity-80 shadow-[0_0_16px] shadow-blue-500/30"
                  />
                ))}
              </div>
            </div>
            {aiLines.map((line) => (
              <div
                key={line}
                className={`absolute h-px origin-left bg-gradient-to-r from-transparent via-blue-500/45 to-transparent dark:via-cyan-300/35 ${line}`}
              />
            ))}
            {aiNodes.map((node, index) => (
              <div
                key={node}
                className={`absolute rounded-full shadow-[0_0_28px] ${node} ${
                  index % 2 === 0 ? "animate-pulse" : ""
                }`}
              />
            ))}
            <div className="absolute left-8 top-10 h-16 w-28 rounded-2xl border border-white/80 bg-white/45 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-950/45" />
            <div className="absolute bottom-10 right-8 h-16 w-32 rounded-2xl border border-white/80 bg-white/45 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-950/45" />
            <div className="absolute bottom-10 left-8 h-12 w-24 rounded-2xl border border-white/80 bg-white/45 shadow-lg backdrop-blur dark:border-white/10 dark:bg-slate-950/45" />
            <div className="absolute right-10 top-12 flex gap-2">
              <span className="size-2 rounded-full bg-blue-500/70 shadow-[0_0_18px] shadow-blue-500/40" />
              <span className="size-2 rounded-full bg-cyan-400/70 shadow-[0_0_18px] shadow-cyan-400/40" />
              <span className="size-2 rounded-full bg-indigo-500/70 shadow-[0_0_18px] shadow-indigo-500/40" />
            </div>
            <div className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/20 dark:border-cyan-300/10" />
            <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/10 dark:border-cyan-300/10" />
            <div className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent dark:via-cyan-300/20" />
            <div className="absolute inset-y-10 left-1/2 w-px bg-gradient-to-b from-transparent via-blue-500/25 to-transparent dark:via-cyan-300/20" />
            <div className="absolute right-12 top-1/2 flex -translate-y-1/2 flex-col gap-2">
              <span className="h-8 w-1 rounded-full bg-blue-500/35" />
              <span className="h-12 w-1 rounded-full bg-cyan-400/45" />
              <span className="h-6 w-1 rounded-full bg-indigo-500/35" />
            </div>
            <div className="absolute left-12 top-1/2 flex -translate-y-1/2 flex-col gap-2">
              <span className="h-6 w-1 rounded-full bg-indigo-500/35" />
              <span className="h-12 w-1 rounded-full bg-blue-500/35" />
              <span className="h-8 w-1 rounded-full bg-cyan-400/45" />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,transparent_42%,rgba(255,255,255,0.55)_100%)] dark:bg-[radial-gradient(circle_at_50%_50%,transparent_0%,transparent_46%,rgba(2,6,23,0.72)_100%)]" />
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
