import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aown Abbas — Graphic Designer",
  description: "Brand identity, editorial design, and visual storytelling",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
