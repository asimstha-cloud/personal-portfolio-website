type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-cyan-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
