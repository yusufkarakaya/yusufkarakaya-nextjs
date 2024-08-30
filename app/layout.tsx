import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Head from "next/head"; // Import Head component
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yusuf Karakaya",
  description: "Passionate about creating impactful web solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="mask-icon" href="/icon.svg" color="#000000" />

        {metadata.title && <title></title>}
        {metadata.description && (
          <meta name="description" content={metadata.description} />
        )}
      </Head>

      <body className={poppins.className}>{children}</body>
    </html>
  );
}
