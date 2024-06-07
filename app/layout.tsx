import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Active Gaming",
  description: "Faire du sport pour de l'esport",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-FR" dir="ltr">
      <head>
        <GoogleAnalytics gaId="G-X8XGE51517" />
        <GoogleTagManager gtmId="GTM-WD9L9DJD" />
        <link rel="apple-touch-icon" sizes="180x180" href="/medias/img/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/medias/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/medias/img/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/medias/img/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/medias/img/favicon/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-bg">{children}</body>
    </html>
  );
}
