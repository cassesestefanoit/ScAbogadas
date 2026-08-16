import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cassese & Saravia | Abogadas UBA",
  description: "Estudio Jurídico - Buenos Aires",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#0B1120] antialiased">
        {/* SOLO el children. Sin Topbar ni Navbar aquí */}
        {children}
      </body>
    </html>
  );
}