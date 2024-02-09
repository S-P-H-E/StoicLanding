import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'S T O I C',
  description: 'Amplify your social medaia impact, get more views and make more money',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="min-w-[320px]">
        {children}
      </div>
      </body>
    </html>
  )
}
