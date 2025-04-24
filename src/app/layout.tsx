import type { Metadata } from "next";
import "./globals.css";

import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PostHogProvider } from "@/components/PostHogProvider";

// Import Inter font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Remotecord – The new way to remote desktop",
  description:
    "Remotecord lets you remotely access, monitor, and manage your devices straight from Discord. No complex setup. Download files, view system stats, and more—all in one place.",
  metadataBase: new URL(process.env.APP_BASE_URL ?? "https://remotecord.app"),
  openGraph: {
    title: "Remotecord – Secure Remote Device Access Through Discord",
    description:
      "Remotecord offers encrypted, real-time remote access to your computer from Discord. Transfer files, run commands, view stats—all in a few clicks.",
    url: process.env.APP_BASE_URL,
    siteName: "Remotecord",
    images: [
      {
        url: "https://remotecord.app/icons/newlogo.png",
        width: 1200,
        height: 630,
        alt: "Remotecord Logo – Remote Device Access via Discord",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remotecord – Remote Control Your PC from Discord",
    description:
      "Remotecord gives you secure, remote access to your devices from Discord. Monitor and manage everything effortlessly.",
    images: ["https://remotecord.app/icons/newlogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="dark max-w-screen overflow-x-hidden" lang="en">
      <head>
        <meta
          name="keywords"
          content="Remotecord, remote desktop, Discord remote control, secure remote access, file transfer Discord, command execution Discord, remote system monitoring, no port forwarding remote tool, TeamViewer alternative, AnyDesk alternative, encrypted remote desktop, control PC from Discord, lightweight remote desktop tool, remote management bot"
        />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${inter.className}  antialiased dark `}>
        <PostHogProvider>
          <NavBar />
          {children}
          <Footer />
        </PostHogProvider>
      </body>
    </html>
  );
}
