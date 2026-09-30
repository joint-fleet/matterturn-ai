import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MatterTurn Ai — See the world. Judge with clarity.",
  description: "Professional AI systems grounded in evidence, expert judgment and the real world.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
