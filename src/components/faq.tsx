"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FAQ({ items }: { items: FaqItem[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-[28px] border border-slate-200 bg-white shadow-sm dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.04]">
      {items.map((item, index) => {
        const open = active === index;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setActive(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:text-white"
              aria-expanded={open}
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`size-5 shrink-0 text-slate-400 transition ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open ? (
              <p className="px-6 pb-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
