export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export type ContactFormPayload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
};
