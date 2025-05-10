import "./globals.css";
import type { Metadata } from "next";
import { RedirectToast } from "@/components/redirect-toast";
import { fonts } from "../styles/fonts";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Bix Finances Dashboard",
  description: "A dashboard for Bix Finances",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.inter.variable} ${fonts.montserrat.variable}`}>
        <Providers>{children}</Providers>
        <RedirectToast />
      </body>
    </html>
  );
}
