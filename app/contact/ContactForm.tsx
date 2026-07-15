"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "../actions/contact";
import { serviceInterestOptions } from "../lib/services";
import {
  FormConsent,
  FormHoneypot,
  FormInput,
  FormSelect,
  FormStatus,
  FormTextarea,
} from "../components/FormControls";

const initialState: FormState = { status: "idle" };

type Props = {
  defaultService?: string;
};

export default function ContactForm({ defaultService }: Props) {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const selectedService = serviceInterestOptions.includes(
    defaultService as (typeof serviceInterestOptions)[number],
  )
    ? defaultService
    : "";

  if (state.status === "success") {
    return (
      <FormStatus
        status="success"
        title="Message Sent"
        message={state.message ?? "Thank you for your message."}
      />
    );
  }

  return (
    <form action={formAction} className="relative flex flex-col gap-5">
      {state.status === "error" && (
        <FormStatus status="error" message={state.message ?? "Something went wrong. Please try again."} />
      )}

      <FormHoneypot />

      <FormInput label="Name" name="name" required />
      <FormInput label="Work Email" name="email" type="email" required />
      <FormInput label="Company / Brand Name" name="company" required />

      <FormSelect label="Service of interest" name="service" optional defaultValue={selectedService}>
        <option value="" className="bg-dark-bg">
          Select a service
        </option>
        {serviceInterestOptions.map((option) => (
          <option key={option} value={option} className="bg-dark-bg">
            {option}
          </option>
        ))}
      </FormSelect>

      <FormTextarea
        label="Message"
        name="message"
        optional
        rows={4}
        placeholder="How can we help?"
      />

      <FormConsent>
        By submitting this form, you agree that Peerprise may use the information provided to review
        and respond to your enquiry.
      </FormConsent>

      <button type="submit" disabled={isPending} className="btn-primary mt-2 w-full">
        {isPending ? "Sending..." : "Contact Peerprise"}
      </button>
    </form>
  );
}
