import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booky",
  description: "Landing page del proyecto Booky con Next.js y Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
