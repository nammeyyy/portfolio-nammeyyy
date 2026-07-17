import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nutpawee Kawee | Software Engineer Portfolio",
  description:
    "Portfolio of Nutpawee Kawee, an aspiring software engineer with hands-on experience building responsive web and mobile applications, integrating APIs, and applying full-stack principles.",
  openGraph: {
    title: "Nutpawee Kawee | Software Engineer Portfolio",
    description:
      "Responsive web, mobile, API integration, full-stack, ML, and XR projects by Nutpawee Kawee.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#101313] text-secondaryText antialiased">
        {children}
      </body>
    </html>
  );
}
