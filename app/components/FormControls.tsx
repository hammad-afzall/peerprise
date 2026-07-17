import type { ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes, InputHTMLAttributes } from "react";
import type { SurfaceVariant } from "../lib/surface";

type FieldVariant = SurfaceVariant;

const labelClass = (variant: FieldVariant) =>
  `text-[14px] font-semibold ${variant === "dark" ? "text-on-dark-subtle" : "text-ink-secondary"}`;

const controlClass = (variant: FieldVariant) =>
  [
    "w-full min-h-[var(--target-min)] h-11 px-4 rounded-[var(--radius-sm)] border outline-none transition-colors",
    "focus:border-accent focus:ring-1 focus:ring-accent",
    variant === "dark"
      ? "border-white/10 bg-white/5 text-white placeholder:text-gray-500"
      : "border-border bg-surface text-ink placeholder:text-muted",
  ].join(" ");

const textareaClass = (variant: FieldVariant) =>
  controlClass(variant).replace("h-11 ", "") + " py-3 resize-y";

type FieldProps = {
  label: string;
  htmlFor?: string;
  required?: boolean;
  optional?: boolean;
  hint?: string;
  error?: string;
  variant?: FieldVariant;
  children: ReactNode;
};

export function FormField({
  label,
  htmlFor,
  required,
  optional,
  hint,
  error,
  variant = "dark",
  children,
}: FieldProps) {
  const hintId = htmlFor ? `${htmlFor}-hint` : undefined;
  const errorId = htmlFor ? `${htmlFor}-error` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className={labelClass(variant)}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
        {optional && !required && (
          <span className={`font-normal ${variant === "dark" ? "text-on-dark-muted" : "text-muted"}`}>
            {" "}
            (optional)
          </span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={hintId} className={`type-small ${variant === "dark" ? "text-on-dark-muted" : "text-muted"}`}>
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="type-small text-error">
          {error}
        </p>
      )}
    </div>
  );
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  optional?: boolean;
  hint?: string;
  error?: string;
  variant?: FieldVariant;
};

export function FormInput({
  label,
  optional,
  hint,
  error,
  variant = "dark",
  id,
  required,
  className = "",
  ...props
}: InputProps) {
  const fieldId = id ?? props.name;
  return (
    <FormField
      label={label}
      htmlFor={fieldId}
      required={required}
      optional={optional}
      hint={hint}
      error={error}
      variant={variant}
    >
      <input
        id={fieldId}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined}
        {...props}
        className={`${controlClass(variant)} ${className}`}
      />
    </FormField>
  );
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  optional?: boolean;
  hint?: string;
  error?: string;
  variant?: FieldVariant;
};

export function FormTextarea({
  label,
  optional,
  hint,
  error,
  variant = "dark",
  id,
  required,
  className = "",
  ...props
}: TextareaProps) {
  const fieldId = id ?? props.name;
  return (
    <FormField
      label={label}
      htmlFor={fieldId}
      required={required}
      optional={optional}
      hint={hint}
      error={error}
      variant={variant}
    >
      <textarea
        id={fieldId}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined}
        {...props}
        className={`${textareaClass(variant)} ${className}`}
      />
    </FormField>
  );
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  optional?: boolean;
  hint?: string;
  error?: string;
  variant?: FieldVariant;
  children: ReactNode;
};

export function FormSelect({
  label,
  optional,
  hint,
  error,
  variant = "dark",
  id,
  required,
  className = "",
  children,
  ...props
}: SelectProps) {
  const fieldId = id ?? props.name;
  return (
    <FormField
      label={label}
      htmlFor={fieldId}
      required={required}
      optional={optional}
      hint={hint}
      error={error}
      variant={variant}
    >
      <select
        id={fieldId}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined}
        {...props}
        className={`${controlClass(variant)} ${className}`}
      >
        {children}
      </select>
    </FormField>
  );
}

type StatusProps = {
  status: "success" | "error";
  title?: string;
  message: string;
  variant?: FieldVariant;
};

export function FormStatus({ status, title, message, variant = "dark" }: StatusProps) {
  if (status === "success") {
    return (
      <div
        role="status"
        className="p-6 rounded-[var(--radius-md)] border border-success bg-success-soft"
      >
        {title && <h3 className="text-[18px] font-bold text-ink mb-2">{title}</h3>}
        <p className="text-ink-secondary m-0">{message}</p>
      </div>
    );
  }

  return (
    <div
      role="alert"
      className={[
        "p-4 rounded-[var(--radius-sm)] border text-[14px]",
        variant === "dark"
          ? "bg-error-soft border-error/50 text-red-200"
          : "bg-error-soft border-error/40 text-error",
      ].join(" ")}
    >
      {title && <p className="font-bold mb-1">{title}</p>}
      <p className="m-0">{message}</p>
    </div>
  );
}

type ConsentProps = {
  children: ReactNode;
  variant?: FieldVariant;
};

export function FormConsent({ children, variant = "dark" }: ConsentProps) {
  return (
    <p
      className={`type-small leading-relaxed m-0 ${variant === "dark" ? "text-on-dark-muted" : "text-muted-strong"}`}
    >
      {children}
    </p>
  );
}

/** Honeypot — visually and accessibly hidden; not announced to assistive technology. */
export function FormHoneypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0">
      <label>
        Leave blank
        <input type="text" name="_hp" autoComplete="off" tabIndex={-1} />
      </label>
    </div>
  );
}
