import type { Metadata } from "next";
import "./globals.css";
import MuiRegistry from "@/lib/MuiRegistry";

export const metadata: Metadata = {
  title: {
    default: "ShiftBy Pro - AI-Driven Workflow Automation",
    template: "%s | ShiftBy Pro",
  },
  description:
    "Transform your business with AI-driven workflow automation. Connect your tools, automate processes, and unlock insights with ShiftBy Pro.",
  keywords: [
    "workflow automation",
    "AI",
    "productivity",
    "business automation",
    "integration",
    "analytics",
  ],
  authors: [{ name: "ShiftBy Pro" }],
  creator: "ShiftBy Pro",
  metadataBase: new URL("https://shiftby.pro"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shiftby.pro",
    siteName: "ShiftBy Pro",
    title: "ShiftBy Pro - AI-Driven Workflow Automation",
    description:
      "Transform your business with AI-driven workflow automation. Connect your tools, automate processes, and unlock insights with ShiftBy Pro.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ShiftBy Pro - AI-Driven Workflow Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shiftbypro",
    creator: "@shiftbypro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MuiRegistry>{children}</MuiRegistry>
      </body>
    </html>
  );
}
