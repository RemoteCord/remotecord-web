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
      "Seamlessly control your devices from Discord with Remotecord. Access files, monitor performance, and manage systems remotely with ease.",
    url: "https://remotecord.app",
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
    title: "Remotecord – Remote Access via Discord Made Simple",
    description:
      "Remotecord gives you secure, remote access to your devices from Discord. Monitor and manage everything effortlessly.",
    images: ["https://remotecord.app/icons/newlogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className="dark max-w-screen overflow-x-hidden" lang="en">
      {/* <head></head> */}
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
