"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import Link from "next/link";
import { submitDigitalReview, type FormState } from "../actions/contact";
import {
  digitalReviewConsentText,
  digitalReviewCredentialNote,
  digitalReviewNeedOptions,
  digitalReviewSuccessMessage,
} from "../lib/digital-review";
import {
  FormConsent,
  FormHoneypot,
  FormInput,
  FormStatus,
  FormTextarea,
} from "../components/FormControls";
import { ctas } from "../lib/ctas";

const initialState: FormState = { status: "idle" };

type Props = {
  className?: string;
};

export default function DigitalReviewForm({ className = "" }: Props) {
  const [state, formAction, isPending] = useActionState(submitDigitalReview, initialState);
  const formId = useId();
  const successRef = useRef<HTMLDivElement>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const needGroupId = `${formId}-need`;

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
          title="Request received"
          message={digitalReviewSuccessMessage}
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
            title="Unable to submit"
            message={
              state.message ??
              "The request could not be submitted. Please check the highlighted fields and try again, or email hello@peerprise.com."
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
          label="Company or brand"
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
          required
          maxLength={500}
          inputMode="url"
          autoComplete="url"
          placeholder="https://example.com"
          error={fieldErrors.website}
          defaultValue={state.values?.website}
          variant="light"
        />
      </div>

      <FormTextarea
        label="Relevant social profile URLs"
        name="socials"
        optional
        rows={3}
        maxLength={2000}
        hint="Optional. Add one URL per line."
        placeholder={"https://linkedin.com/company/example\nhttps://instagram.com/example"}
        error={fieldErrors.socials}
        defaultValue={state.values?.socials}
        variant="light"
      />

      <fieldset className="m-0 p-0 border-0">
        <legend className="text-[14px] font-semibold text-[#1f2a2e]/70 mb-3 dark:text-white/70">
          What do you currently need help with?{" "}
          <span className="font-normal text-[#1f2a2e]/50 dark:text-white/50">(optional)</span>
        </legend>
        <div
          id={needGroupId}
          className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
          role="radiogroup"
          aria-describedby={fieldErrors.service ? `${needGroupId}-error` : undefined}
        >
          {digitalReviewNeedOptions.map((option) => {
            const optionId = `${formId}-need-${option.replace(/\s+/g, "-").toLowerCase()}`;
            return (
              <label
                key={option}
                htmlFor={optionId}
                className="flex items-center gap-3 min-h-[var(--target-min)] border border-black/10 bg-black/[0.02] px-3.5 py-2.5 cursor-pointer has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-focus has-[:checked]:border-accent has-[:checked]:bg-accent/10 dark:border-white/10 dark:bg-white/5"
              >
                <input
                  id={optionId}
                  type="radio"
                  name="service"
                  value={option}
                  defaultChecked={state.values?.service === option}
                  className="h-4 w-4 accent-[var(--color-accent)] shrink-0"
                />
                <span className="type-small text-[#1f2a2e] dark:text-white">{option}</span>
              </label>
            );
          })}
        </div>
        {fieldErrors.service && (
          <p id={`${needGroupId}-error`} role="alert" className="type-small text-error mt-2 mb-0">
            {fieldErrors.service}
          </p>
        )}
      </fieldset>

      <FormTextarea
        label="Main concern"
        name="concern"
        required
        rows={4}
        maxLength={4000}
        hint="Explain the most important problem or responsibility you need help with."
        error={fieldErrors.concern}
        defaultValue={state.values?.concern}
        variant="light"
      />

      <p className="type-small text-[#1f2a2e]/60 m-0 border border-black/10 bg-black/[0.02] px-4 py-3 dark:border-white/10 dark:bg-white/5 dark:text-white/60">
        {digitalReviewCredentialNote}
      </p>

      <FormConsent variant="light">{digitalReviewConsentText}</FormConsent>

      <button
        type="submit"
        disabled={isPending}
        className="btn-primary mt-1 w-full disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isPending ? "Submitting…" : "Request My Review"}
      </button>
    </form>
  );
}
