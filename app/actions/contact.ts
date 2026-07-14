"use server";

import { sendContactEmail, sendHealthCheckEmail } from "../lib/email";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

function validateBase(
  formData: FormData,
): { name: string; email: string; company: string } | FormState {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const company = (formData.get("company") as string)?.trim();

  // Honeypot check (bot trap — must remain empty)
  const honeypot = (formData.get("_hp") as string)?.trim();
  if (honeypot) return { status: "error", message: "Submission rejected." };

  if (!name || !email || !company) {
    return {
      status: "error",
      message: "Please complete all required fields.",
    };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  return { name, email, company };
}

function optionalField(formData: FormData, key: string): string | undefined {
  const value = (formData.get(key) as string | null)?.trim();
  return value || undefined;
}

export async function submitHealthCheck(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const result = validateBase(formData);
  if ("status" in result) return result;

  try {
    await sendHealthCheckEmail({
      ...result,
      website: optionalField(formData, "website"),
      socials: optionalField(formData, "socials"),
      service: optionalField(formData, "service"),
      concern: optionalField(formData, "concern"),
    });
  } catch (error) {
    console.error("Health check email failed:", error);
    return {
      status: "error",
      message: "Something went wrong sending your request. Please try again or email hello@peerprise.com.",
    };
  }

  return {
    status: "success",
    message: "Thank you! We'll review your details and be in touch within one business day.",
  };
}

export async function submitContact(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const result = validateBase(formData);
  if ("status" in result) return result;

  try {
    await sendContactEmail({
      ...result,
      service: optionalField(formData, "service"),
      message: optionalField(formData, "message"),
    });
  } catch (error) {
    console.error("Contact email failed:", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again or email hello@peerprise.com.",
    };
  }

  return {
    status: "success",
    message: "Thank you for your message. We'll be in touch within one business day.",
  };
}
