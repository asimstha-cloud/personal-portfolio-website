"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { Button } from "@/components/button";

const serviceOptions = [
  "AI Marketing Strategy",
  "SEO Optimization",
  "Local SEO",
  "Google Business Profile Optimization",
  "Social Media Marketing",
  "Meta Ads",
  "Google Ads",
  "Content Marketing",
  "AI Automation",
  "Marketing Consultation",
  "Analytics & Reporting",
  "Website Strategy",
];

type FormState = "idle" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const form = event.currentTarget;
    const data = new FormData(form);
    const requiredFields = ["name", "email", "service", "message"];
    const missing = requiredFields.some((field) => !String(data.get(field) || "").trim());
    const email = String(data.get("email") || "");

    window.setTimeout(() => {
      if (missing || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setState("error");
      } else {
        setState("success");
        form.reset();
      }
      setLoading(false);
    }, 450);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900/75 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Company" name="company" />
        <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          Service Required
          <select
            name="service"
            required
            className="rounded-2xl border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          Budget
          <select
            name="budget"
            className="rounded-2xl border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          >
            <option value="">Select a range</option>
            <option>Under NPR 50,000</option>
            <option>NPR 50,000 - 150,000</option>
            <option>NPR 150,000 - 300,000</option>
            <option>NPR 300,000+</option>
          </select>
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-2xl border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
          placeholder="Tell me about your business, goals, and current marketing challenge."
        />
      </label>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" disabled={loading} className="min-w-40 disabled:cursor-wait disabled:opacity-70">
          {loading ? "Sending..." : "Submit"} <Send className="ml-2 size-4" />
        </Button>
        {state === "success" && (
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-300">
            Thank you. Your message is ready for backend integration.
          </p>
        )}
        {state === "error" && (
          <p className="text-sm font-medium text-red-600 dark:text-red-300">
            Please complete the required fields with a valid email.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-2xl border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
      />
    </label>
  );
}
