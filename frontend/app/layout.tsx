import type { Metadata } from "next";
import "./globals.css";
import { figtree } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Crescendo",
  description: "Rate music, and discover small artists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
