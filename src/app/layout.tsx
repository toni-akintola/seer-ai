import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import SupabaseProvider from './client/supabase-provider'
import Providers from '../lib/providers'

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
        className={`${SCP.className} bg-gradient-to-b from-indigo-800 via-rose-400 to-amber-200 `}
      >
        <SupabaseProvider>
          <Providers>
            {children}
            <Analytics />
          </Providers>
        </SupabaseProvider>
      </body>
    </html>
  )
}
