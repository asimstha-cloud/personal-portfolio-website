"use client";

import { Loader2, Send } from "lucide-react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/lib/actions";
import { budgets, services } from "@/constants/site";
import type { ContactFormState } from "@/types/contact";

const initialState: ContactFormState = {
  status: "idle",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group relative inline-flex min-h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-950 px-6 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-100"
    >
      {pending ? (
        <Loader2 className="size-4 animate-spin" />
      ) : (
        <Send className="size-4" />
      )}
      {pending ? "Sending" : "Submit Message"}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <form
      action={formAction}
      className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/60 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Your name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
        />
        <Field label="Phone" name="phone" placeholder="9707299872" />
        <Field label="Company" name="company" placeholder="Company name" />
        <Select label="Service Required" name="service" required>
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </Select>
        <Select label="Budget" name="budget" required>
          <option value="">Select budget</option>
          {budgets.map((budget) => (
            <option key={budget} value={budget}>
              {budget}
            </option>
          ))}
        </Select>
      </div>

      <label className="mt-5 block">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your goals, current marketing setup, and timeline."
          className="mt-2 w-full resize-none rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:focus:ring-cyan-400/10"
        />
      </label>

      {state.message ? (
        <p
          className={`mt-5 rounded-2xl px-4 py-3 text-sm ${
            state.status === "success"
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-200"
              : "bg-rose-50 text-rose-700 dark:bg-rose-400/10 dark:text-rose-200"
          }`}
          role={state.status === "error" ? "alert" : "status"}
        >
          {state.message}
        </p>
      ) : null}

      <div className="mt-6">
        <SubmitButton />
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 h-12 w-full rounded-full border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:focus:ring-cyan-400/10"
      />
    </label>
  );
}

function Select({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
        {label}
      </span>
      <select
        name={name}
        required={required}
        className="mt-2 h-12 w-full rounded-full border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100 dark:border-white/10 dark:bg-slate-950/60 dark:text-white dark:focus:ring-cyan-400/10"
      >
        {children}
      </select>
    </label>
  );
}
