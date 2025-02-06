// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Web3Provider } from "../utils/Web3Provider";

export const metadata: Metadata = {
  title: "Something",
  description: "Something",
  keywords: "Something",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="to-background-darker min-h-screen bg-gradient-to-b from-background font-sans">
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
