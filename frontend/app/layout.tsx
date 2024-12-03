import type { Metadata } from "next";
import "./globals.css";
import { figtree } from "@/app/ui/fonts";
import { getServerSession } from "next-auth";
import { authOptions } from "./config/authOptions";
import Provider from "./client-provider";

export const metadata: Metadata = {
  title: "Crescendo",
  description: "Rate music, and discover small artists.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${figtree.className} antialiased`}>
        {/* Wrap children with Provider passing the session */}
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  );
}
