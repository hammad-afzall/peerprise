"use client";

import { useActionState } from "react";
import { submitHealthCheck, type FormState } from "../actions/contact";
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

export default function HealthCheckForm() {
  const [state, formAction, isPending] = useActionState(submitHealthCheck, initialState);

  if (state.status === "success") {
    return (
      <FormStatus
        status="success"
        title="Request Received"
        message={state.message ?? "Thank you. We'll be in touch shortly."}
      />
    );
  }

  return (
    <form action={formAction} className="relative flex flex-col gap-5">
      {state.status === "error" && (
        <FormStatus status="error" message={state.message ?? "Something went wrong. Please try again."} />
      )}

      <FormHoneypot />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormInput label="Name" name="name" required />
        <FormInput label="Work Email" name="email" type="email" required />
      </div>

      <FormInput label="Company / Brand Name" name="company" required />
      <FormInput label="Website URL" name="website" type="url" optional />

      <FormTextarea
        label="Social Profiles"
        name="socials"
        optional
        rows={2}
        placeholder="e.g. instagram.com/brand, linkedin.com/company/brand"
      />

      <FormSelect label="Service of Interest" name="service" optional>
        {serviceInterestOptions.map((option) => (
          <option key={option} value={option} className="bg-dark-bg">
            {option}
          </option>
        ))}
      </FormSelect>

      <FormTextarea
        label="Main Concern"
        name="concern"
        optional
        rows={3}
        placeholder="Briefly describe the biggest challenge with your current digital presence."
      />

      <FormConsent>
        By submitting this form, you agree that Peerprise may use the information provided to review
        and respond to your enquiry.
      </FormConsent>

      <button type="submit" disabled={isPending} className="btn-primary mt-2 w-full">
        {isPending ? "Submitting..." : "Request Your Free Health Check"}
      </button>
    </form>
  );
}
