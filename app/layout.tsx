import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solo Autos | Compramos tu carro rápido",
  description:
    "Solo Autos compra carros usados particulares con revisión seria, pago seguro y traspaso formal."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
