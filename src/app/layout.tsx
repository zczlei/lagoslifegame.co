import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Script from "next/script";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE } from "@/lib/constants";
import { TDK } from "@/lib/tdk";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TDK.home.title,
    template: `%s · ${SITE.name}`,
  },
  description: TDK.home.description,
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Lagos Life Guide (Unofficial)",
    title: TDK.home.title,
    description: TDK.home.description,
    url: SITE.url,
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "Lagos Life — a Sims-style life game set in Lagos, Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TDK.home.title,
    description: TDK.home.description,
    images: ["/og/home.png"],
  },
  other: {
    "last-modified": SITE.lastUpdatedIso,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="surface-noise flex min-h-full flex-col font-sans">
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          strategy="beforeInteractive"
          data-key="V/fO7ZEa0pkl728x7fsaZQ"
        />
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
