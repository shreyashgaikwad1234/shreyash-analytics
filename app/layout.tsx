import "./globals.css";
import "./styles/effects.css";

import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider";

export const metadata: Metadata = {
  title: "Shreyash Analytics",
  description: "AI & Data Analytics Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>

        <ThemeProvider>
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}