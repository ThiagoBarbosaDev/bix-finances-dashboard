import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./providers";
import { fonts } from "../styles/fonts";
import { RedirectToast } from "@/components/redirect-toast";

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
