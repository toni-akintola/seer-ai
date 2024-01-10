import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer/Footer'
import { Analytics } from '@vercel/analytics/react'
import SupabaseProvider from '@/app/client/supabase-provider'

const SCP = Source_Code_Pro({
  weight: ['200', '300', '400', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${SCP.className} bg-gradient-to-b from-teal-600 via-teal-400 to-teal-200`}
      >
        <SupabaseProvider>
          {children}
          <Analytics />
        </SupabaseProvider>
      </body>
    </html>
  )
}
