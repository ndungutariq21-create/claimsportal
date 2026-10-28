import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claims Portal | Stackwire Ltd",
  description: "Enterprise claims management by Stackwire.",
  icons: { icon: "/stackwire-mark.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans text-brand-ink antialiased">{children}</body>
    </html>
  );
}
