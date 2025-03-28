import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Funnel_Sans } from "next/font/google";
import PageContent from "@/components/layout/page-content";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Designed and developed by Christian Toribio",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

const font = Funnel_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("flex min-h-screen w-full flex-col dark", font.className)}
      >
        <PageContent>{children}</PageContent>
      </body>
    </html>
  );
}
