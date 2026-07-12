"use server";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

function validateBase(formData: FormData): { name: string; email: string; company: string; consent: FormDataEntryValue | null } | FormState {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const company = (formData.get("company") as string)?.trim();
  const consent = formData.get("consent");
  
  // Honeypot check (bot trap — must remain empty)
  const honeypot = (formData.get("_hp") as string)?.trim();
  if (honeypot) return { status: "error", message: "Submission rejected." };

  if (!name || !email || !company || !consent) {
    return { status: "error", message: "Please complete all required fields and accept the consent checkbox." };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  return { name, email, company, consent };
}

export async function submitHealthCheck(_prevState: FormState, formData: FormData): Promise<FormState> {
  const result = validateBase(formData);
  if ("status" in result) return result;

  // TODO: Connect to email service
  await new Promise((resolve) => setTimeout(resolve, 400));
  return { status: "success", message: "Thank you! We'll review your details and be in touch within one business day." };
}

export async function submitContact(_prevState: FormState, formData: FormData): Promise<FormState> {
  const result = validateBase(formData);
  if ("status" in result) return result;

  // TODO: Connect to email service
  await new Promise((resolve) => setTimeout(resolve, 400));
  return { status: "success", message: "Thank you for your message. We'll be in touch within one business day." };
}
