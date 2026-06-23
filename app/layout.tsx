import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DipVision Clone",
  description: "Modern IT Solutions & Digital Services",
  keywords: [
    "Web Development",
    "Mobile Apps",
    "AI Solutions",
    "Cloud Services",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#050816] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}