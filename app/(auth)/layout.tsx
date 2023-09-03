import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Threads App',
  description: 'Threads app clone',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}