import type { Metadata } from 'next'
import { Saira } from 'next/font/google'
import Head from 'next/head'
import './globals.css'

const saira = Saira({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Yusuf Karakaya',
  description: 'Passionate about creating impactful web solutions',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="mask-icon" href="/icon.svg" color="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {metadata.title && <title></title>}
        {metadata.description && (
          <meta name="description" content={metadata.description} />
        )}
      </Head>

      <body className={saira.className}>{children}</body>
    </html>
  )
}
