import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Votter",
  description: "Votter is a simple application to create polls and share it",
};

interface RootLayoutProps {
  readonly children: React.ReactNode,
  params: {
    lng: string
  }
};

export default function RootLayout({ children, params: { lng } }: RootLayoutProps) {

  return (
    <html lang={lng}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
