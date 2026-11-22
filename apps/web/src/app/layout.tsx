
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/providers";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const siteName = "Batch-Harbor";
const siteDescription =
  "Batch-Harbor builds modern data engineering solutions, AI-powered applications, intelligent automation, and scalable software systems.";

export const metadata: Metadata = {
  title: {
    default: "Batch-Harbor | Engineering Data. Powering Intelligence.",
    template: "%s | Batch-Harbor",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Batch-Harbor",
    "Data Engineering",
    "Artificial Intelligence",
    "Machine Learning",
    "Intelligent Automation",
    "Cloud Engineering",
    "Software Engineering",
    "Data Pipelines",
    "Open Source",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    title: "Batch-Harbor | Engineering Data. Powering Intelligence.",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Batch-Harbor | Engineering Data. Powering Intelligence.",
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#191970",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col font-sans text-[#191970]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
