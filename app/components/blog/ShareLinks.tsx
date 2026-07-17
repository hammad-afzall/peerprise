type Props = {
  title: string;
  url: string;
};

export default function ShareLinks({ title, url }: Props) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: "Email",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#1f2a2e]/50">
        Share
      </span>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.label === "Email" ? undefined : "_blank"}
          rel={link.label === "Email" ? undefined : "noopener noreferrer"}
          className="rounded-full border border-black/10 px-3 py-1.5 text-[14px] font-medium text-[#1f2a2e] transition-colors hover:border-accent hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
