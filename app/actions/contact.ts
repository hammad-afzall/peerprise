"use server";

import { sendContactEmail, sendDigitalReviewEmail } from "../lib/email";
import { digitalReviewNeedOptions, digitalReviewSuccessMessage } from "../lib/digital-review";
import {
  contactSuccessMessage,
  isContactBudgetRange,
  isContactEnquiryType,
  isContactStartPeriod,
} from "../lib/contact";

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
  values?: Record<string, string>;
};

function readValues(formData: FormData, keys: string[]): Record<string, string> {
  const values: Record<string, string> = {};
  for (const key of keys) {
    const value = (formData.get(key) as string | null)?.trim();
    if (value) values[key] = value;
  }
  return values;
}

function normalizeWebsiteUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const url = new URL(candidate);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    if (!url.hostname.includes(".")) return null;
    return url.toString();
  } catch {
    return null;
  }
}

function checkHoneypot(formData: FormData): FormState | null {
  const honeypot = (formData.get("_hp") as string)?.trim();
  if (honeypot) return { status: "error", message: "Submission rejected." };
  return null;
}

export async function submitDigitalReview(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const values = readValues(formData, [
    "name",
    "email",
    "company",
    "website",
    "socials",
    "service",
    "concern",
  ]);

  const honeypotError = checkHoneypot(formData);
  if (honeypotError) return honeypotError;

  const name = values.name ?? "";
  const email = values.email ?? "";
  const company = values.company ?? "";
  const websiteRaw = values.website ?? "";
  const concern = values.concern ?? "";
  const service = values.service;
  const socials = values.socials;

  const fieldErrors: Record<string, string> = {};

  if (!name) fieldErrors.name = "Please enter your name.";
  else if (name.length > 120) fieldErrors.name = "Please enter a shorter name.";

  if (!email) fieldErrors.email = "Please enter your work email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (!company) fieldErrors.company = "Please enter your company or brand.";
  else if (company.length > 160) {
    fieldErrors.company = "Please enter a shorter company or brand name.";
  }

  const website = normalizeWebsiteUrl(websiteRaw);
  if (!websiteRaw) fieldErrors.website = "Please enter your website URL.";
  else if (!website) {
    fieldErrors.website = "Please enter a usable website URL.";
  }

  if (service && !digitalReviewNeedOptions.includes(service as (typeof digitalReviewNeedOptions)[number])) {
    fieldErrors.service = "Please select a valid option.";
  }

  if (!concern) {
    fieldErrors.concern = "Please describe your main concern.";
  } else if (concern.length > 4000) {
    fieldErrors.concern = "Please shorten your main concern.";
  }

  if (socials && socials.length > 2000) {
    fieldErrors.socials = "Please shorten the social profile list.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      fieldErrors,
      values,
    };
  }

  try {
    await sendDigitalReviewEmail({
      name,
      email,
      company,
      website: website!,
      socials,
      service,
      concern,
    });
  } catch (error) {
    console.error("Digital review email failed:", error);
    return {
      status: "error",
      message:
        "The request could not be submitted. Please try again, or email hello@peerprise.com.",
      values,
    };
  }

  return {
    status: "success",
    message: digitalReviewSuccessMessage,
  };
}

export async function submitContact(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const values = readValues(formData, [
    "name",
    "email",
    "company",
    "website",
    "enquiryType",
    "message",
    "startPeriod",
    "budget",
  ]);

  const honeypotError = checkHoneypot(formData);
  if (honeypotError) return honeypotError;

  const name = values.name ?? "";
  const email = values.email ?? "";
  const company = values.company ?? "";
  const websiteRaw = values.website ?? "";
  const enquiryType = values.enquiryType ?? "";
  const message = values.message ?? "";
  const startPeriod = values.startPeriod ?? "";
  const budget = values.budget ?? "";

  const fieldErrors: Record<string, string> = {};

  if (!name) fieldErrors.name = "Please enter your name.";
  else if (name.length > 120) fieldErrors.name = "Please enter a shorter name.";

  if (!email) fieldErrors.email = "Please enter your work email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (!company) fieldErrors.company = "Please enter your company.";
  else if (company.length > 160) {
    fieldErrors.company = "Please enter a shorter company name.";
  }

  if (websiteRaw) {
    const website = normalizeWebsiteUrl(websiteRaw);
    if (!website) fieldErrors.website = "Please enter a usable website URL.";
  }

  if (!enquiryType) {
    fieldErrors.enquiryType = "Please select an enquiry type.";
  } else if (!isContactEnquiryType(enquiryType)) {
    fieldErrors.enquiryType = "Please select a valid enquiry type.";
  }

  if (!message) {
    fieldErrors.message = "Please describe what you need help with.";
  } else if (message.length > 4000) {
    fieldErrors.message = "Please shorten your message.";
  }

  if (startPeriod && !isContactStartPeriod(startPeriod)) {
    fieldErrors.startPeriod = "Please select a valid start period.";
  }

  if (budget && !isContactBudgetRange(budget)) {
    fieldErrors.budget = "Please select a valid budget range.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      fieldErrors,
      values,
    };
  }

  const website = websiteRaw ? normalizeWebsiteUrl(websiteRaw) ?? undefined : undefined;

  try {
    await sendContactEmail({
      name,
      email,
      company,
      website,
      enquiryType,
      message,
      startPeriod: startPeriod || undefined,
      budget: budget || undefined,
    });
  } catch (error) {
    console.error("Contact email failed:", error);
    return {
      status: "error",
      message: `The enquiry could not be sent. Please try again, or email hello@peerprise.com.`,
      values,
    };
  }

  return {
    status: "success",
    message: contactSuccessMessage,
  };
}
