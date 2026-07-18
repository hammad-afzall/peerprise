"use client";

import { useActionState, useEffect, useRef } from "react";
import Link from "next/link";
import { submitContact, type FormState } from "../actions/contact";
import {
  contactBudgetRanges,
  contactConsentText,
  contactEnquiryTypes,
  contactStartPeriods,
  contactSuccessMessage,
  resolveContactEnquiryType,
} from "../lib/contact";
import {
  FormConsent,
  FormHoneypot,
  FormInput,
  FormSelect,
  FormStatus,
  FormTextarea,
} from "./FormControls";
import { ctas } from "../lib/ctas";
import { CONTACT_EMAIL } from "../lib/nav";

const initialState: FormState = { status: "idle" };

type Props = {
  /** Raw query value from `?service=` or `?enquiry=` — allowlisted before use. */
  defaultEnquiry?: string;
  className?: string;
};

export default function ContactForm({ defaultEnquiry, className = "" }: Props) {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const successRef = useRef<HTMLDivElement>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  const preselectedEnquiry = resolveContactEnquiryType(defaultEnquiry);

  useEffect(() => {
    if (state.status === "success") {
      successRef.current?.focus();
    } else if (state.status === "error") {
      errorSummaryRef.current?.focus();
    }
  }, [state.status, state.message]);

  if (state.status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} className="outline-none">
        <FormStatus
          status="success"
          title="Enquiry received"
          message={state.message ?? contactSuccessMessage}
          variant="light"
        />
        <p className="mt-6 type-body text-[#1f2a2e]/70 m-0 dark:text-white/70">
          You can also{" "}
          <Link
            href={ctas.exploreServices.href}
            className="font-bold text-[#1f2a2e] hover:text-[#1f2a2e]/70 dark:text-white dark:hover:text-white/70"
          >
            {ctas.exploreServices.label}
          </Link>{" "}
          or{" "}
          <Link
            href="/"
            className="font-bold text-[#1f2a2e] hover:text-[#1f2a2e]/70 dark:text-white dark:hover:text-white/70"
          >
            return to the homepage
          </Link>
          .
        </p>
      </div>
    );
  }

  const fieldErrors = state.fieldErrors ?? {};
  const formKey = state.status === "error" ? `error-${JSON.stringify(state.values ?? {})}` : "idle";

  const enquiryDefault = state.values?.enquiryType ?? preselectedEnquiry;
  const startDefault = state.values?.startPeriod ?? "";
  const budgetDefault = state.values?.budget ?? "";

  return (
    <form
      key={formKey}
      action={formAction}
      className={`relative flex flex-col gap-5 ${className}`}
      noValidate
      aria-busy={isPending || undefined}
    >
      {state.status === "error" && (
        <div ref={errorSummaryRef} tabIndex={-1} className="outline-none">
          <FormStatus
            status="error"
            title="Unable to send enquiry"
            message={
              state.message ??
              `The enquiry could not be sent. Please check the highlighted fields and try again, or email ${CONTACT_EMAIL}.`
            }
            variant="light"
          />
        </div>
      )}

      <FormHoneypot />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormInput
          label="Name"
          name="name"
          required
          maxLength={120}
          autoComplete="name"
          error={fieldErrors.name}
          defaultValue={state.values?.name}
          variant="light"
        />
        <FormInput
          label="Work email"
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          error={fieldErrors.email}
          defaultValue={state.values?.email}
          variant="light"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormInput
          label="Company"
          name="company"
          required
          maxLength={160}
          autoComplete="organization"
          error={fieldErrors.company}
          defaultValue={state.values?.company}
          variant="light"
        />
        <FormInput
          label="Website URL"
          name="website"
          type="url"
          optional
          maxLength={500}
          inputMode="url"
          autoComplete="url"
          placeholder="https://example.com"
          error={fieldErrors.website}
          defaultValue={state.values?.website}
          variant="light"
        />
      </div>

      <FormSelect
        label="Enquiry type"
        name="enquiryType"
        required
        error={fieldErrors.enquiryType}
        defaultValue={enquiryDefault}
        variant="light"
      >
        <option value="">Select an enquiry type</option>
        {contactEnquiryTypes.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </FormSelect>

      <FormTextarea
        label="What do you need help with?"
        name="message"
        required
        rows={5}
        maxLength={4000}
        hint="Describe the current situation, the problem, and the outcome you are trying to achieve."
        error={fieldErrors.message}
        defaultValue={state.values?.message}
        variant="light"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormSelect
          label="Preferred start period"
          name="startPeriod"
          optional
          error={fieldErrors.startPeriod}
          defaultValue={startDefault}
          variant="light"
        >
          <option value="">Select a start period</option>
          {contactStartPeriods.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </FormSelect>

        <FormSelect
          label="Budget range"
          name="budget"
          optional
          error={fieldErrors.budget}
          defaultValue={budgetDefault}
          variant="light"
        >
          <option value="">Not specified</option>
          {contactBudgetRanges.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </FormSelect>
      </div>

      <FormConsent variant="light">{contactConsentText}</FormConsent>

      <button
        type="submit"
        disabled={isPending}
        className="btn-primary mt-1 w-full disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
