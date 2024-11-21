import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "@/components/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
});

export const metadata: Metadata = {
  title: {
    template: "%s | GeoJogos",
    default: "GeoJogos",
  },
  description: "GeoJogos",
  applicationName: "Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${exo.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
