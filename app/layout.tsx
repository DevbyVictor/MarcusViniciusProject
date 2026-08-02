import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MV Personal Trainer | Consultoria Online",
  description:
    "Treino personalizado, ajustes frequentes e acompanhamento próximo para você evoluir de verdade.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}