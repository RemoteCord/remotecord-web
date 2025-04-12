import type { Metadata } from "next";
import "./globals.css";

import { NavBar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Import Inter font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Remotecord",
  description:
    "Ditch TeamViewer & AnyDesk - RemoteCord brings remote access functionality right into Discord, with the easiest setup process you've seen yet. Forget about complicated setups & bad interfaces. Remotely access your devices directly from Discord, monitor them, download files & more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark max-w-[100vw] overflow-x-hidden" lang="en">
      <body className={`${inter.className}  antialiased dark `}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
