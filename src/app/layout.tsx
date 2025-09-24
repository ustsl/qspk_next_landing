import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { ScriptsBlock } from "@/components/shared/ScriptsBlock";
import { CookieComponent } from "@/components/features/CookieComponent";

const inter = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Quickspeak. Landing bot builder. Create dynamic landing page",
  description: "Create dynamic landing page with Quickspeak. With awesome landing button dialog style.",
  icons: {
    icon: 'icon.png',
    shortcut: 'icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScriptsBlock gtmList={'GTM-N4PQWJF'} />

        {children}

      </body>
    </html>
  );
}
