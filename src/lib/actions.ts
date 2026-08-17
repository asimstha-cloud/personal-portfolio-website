"use server";

import type { ContactFormState } from "@/types/contact";

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const budget = String(formData.get("budget") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !service || !budget || !message) {
    return {
      status: "error",
      message: "Please complete all required fields before sending.",
    };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  // Future integration point: send this payload to CRM, email, or database.
  await new Promise((resolve) => setTimeout(resolve, 400));

  return {
    status: "success",
    message:
      "Thank you. Your message has been received, and Asim will respond soon.",
  };
}
