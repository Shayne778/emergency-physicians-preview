import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://shayne778.github.io/emergency-physicians-preview";
const socialImage = `${siteUrl}/scraped-assets/01-new-ccep-logo-047dec-blue-h-rez.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cape Coral Emergency Physicians",
    template: "%s | Cape Coral Emergency Physicians",
  },
  description:
    "Independent, physician-led emergency care serving Cape Coral since 1985.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  openGraph: {
    title: "Cape Coral Emergency Physicians",
    description: "Independent, physician-led emergency care serving Cape Coral since 1985.",
    url: siteUrl,
    siteName: "Cape Coral Emergency Physicians",
    images: [
      {
        url: socialImage,
        alt: "Cape Coral Emergency Physicians logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cape Coral Emergency Physicians",
    description: "Independent, physician-led emergency care serving Cape Coral since 1985.",
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
