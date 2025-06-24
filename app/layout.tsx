import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lightning Blog - Built with Cosmic in Minutes',
  description: 'A modern, blazing-fast blog that proves building with Cosmic is lightning quick! Discover how to ditch WordPress and embrace the future of content management.',
  keywords: 'blog, cosmic, cms, headless, wordpress alternative, fast website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}