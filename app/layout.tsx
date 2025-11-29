import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PRASANJEET | Frontend Developer',
  description: 'Crafting smooth, fast, premium digital experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

