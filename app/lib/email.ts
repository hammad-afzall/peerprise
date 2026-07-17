import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function row(label: string, value: string | undefined): string {
  if (!value?.trim()) return "";
  return `<tr>
    <td style="padding:8px 12px;color:#6b7280;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;color:#111827;white-space:pre-wrap;">${escapeHtml(value.trim())}</td>
  </tr>`;
}

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  website?: string;
  enquiryType?: string;
  message?: string;
  startPeriod?: string;
  budget?: string;
};

type DigitalReviewPayload = {
  name: string;
  email: string;
  company: string;
  website: string;
  socials?: string;
  service?: string;
  concern: string;
};

function getMailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL ?? "Peerprise <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO_EMAIL ?? "hello@peerprise.com";

  if (!apiKey) {
    throw new Error("Missing RESEND_API_KEY environment variable.");
  }

  return { from, to };
}

export async function sendContactEmail(payload: ContactPayload) {
  const { from, to } = getMailConfig();
  const { name, email, company, website, enquiryType, message, startPeriod, budget } = payload;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New enquiry from ${name}`,
    html: `
      <h2 style="font-family:sans-serif;color:#111827;">New Contact Enquiry</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
        ${row("Name", name)}
        ${row("Email", email)}
        ${row("Company", company)}
        ${row("Website", website)}
        ${row("Enquiry type", enquiryType)}
        ${row("What they need help with", message)}
        ${row("Preferred start period", startPeriod)}
        ${row("Budget range", budget)}
      </table>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function sendDigitalReviewEmail(payload: DigitalReviewPayload) {
  const { from, to } = getMailConfig();
  const { name, email, company, website, socials, service, concern } = payload;

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Digital Presence Review request from ${name}`,
    html: `
      <h2 style="font-family:sans-serif;color:#111827;">New Digital Presence Review Request</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
        ${row("Name", name)}
        ${row("Email", email)}
        ${row("Company", company)}
        ${row("Website", website)}
        ${row("Social profiles", socials)}
        ${row("Need help with", service)}
        ${row("Main concern", concern)}
      </table>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}
