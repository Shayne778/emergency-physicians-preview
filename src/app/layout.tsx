import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://preview.example.com"),
  title: {
    default: "Emergency Physicians Group | Private Preview",
    template: "%s | Emergency Physicians Group",
  },
  description:
    "A private preview rebuild for an emergency physician group, focused on modern design, clear physician profiles, and fast access to care information.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  openGraph: {
    title: "Emergency Physicians Group",
    description: "Private preview of a modern emergency physician group website.",
    type: "website",
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
