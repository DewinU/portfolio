import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Me | Dewin Umana',
  description: 'Dewin Umana Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
