import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Peerprise — Managed Digital Presence",
    template: "%s | Peerprise",
  },
  description:
    "Peerprise provides Social Presence Support, website care, digital operations support and custom software solutions for companies, brands and professionals.",
  keywords: [
    "digital presence management",
    "Social Presence Support",
    "website care",
    "website maintenance",
    "digital operations support",
    "custom software solutions",
    "technical support",
    "Peerprise",
  ],
  icons: {
    icon: "/favicon.svg"
  },
  metadataBase: new URL("https://peerprise.com"),
  openGraph: {
    title: "Peerprise — Managed Digital Presence",
    description:
      "Peerprise keeps your website maintained, your social channels active and your digital tools working smoothly — plus custom software when standard tools are not enough.",
    type: "website",
    locale: "en_US",
    siteName: "Peerprise",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peerprise — Managed Digital Presence",
    description:
      "Peerprise keeps your website maintained, your social channels active and your digital tools working smoothly — plus custom software when standard tools are not enough.",
  },
  robots: { index: true, follow: true },
};

/** Applies stored theme before paint to avoid a light-mode flash. */
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${manrope.className} bg-white text-[#1f2a2e] dark:bg-[#0a0a0a] dark:text-white min-h-screen flex flex-col [overflow-x:clip] w-full`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="w-full [overflow-x:clip]" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
