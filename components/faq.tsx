export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70"
        >
          <summary className="cursor-pointer list-none text-base font-semibold text-slate-950 dark:text-white">
            {item.question}
          </summary>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
