import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from '@vercel/analytics/next';

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
    "Peerprise provides website care, social presence management and digital operations support for companies, brands and professionals.",
  keywords: [
    "digital presence management",
    "social media management",
    "website care",
    "website maintenance",
    "digital operations",
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
      "One team managing your website, social channels and digital tools.",
    type: "website",
    locale: "en_US",
    siteName: "Peerprise",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peerprise — Managed Digital Presence",
    description:
      "One team managing your website, social channels and digital tools.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className={`${manrope.className} bg-[#0B1220] text-white/90 selection:bg-indigo-500/30 min-h-screen flex flex-col overflow-x-hidden w-full`}>
        <Header />
        <main id="main-content" className="w-full overflow-x-hidden">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
