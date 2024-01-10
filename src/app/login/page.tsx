'use client'

import { useSupabase } from '@/app/client/supabase-provider'
import { getURL } from '../../../utils/helpers'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function AuthUI() {
  const { supabase } = useSupabase()
  return (
    <div className='flex flex-col space-y-4 h-screen'>
      <Auth
        supabaseClient={supabase}
        providers={['google']}
        redirectTo={'http://localhost:3000/api/auth/callback'}
        magicLink={true}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#404040',
                brandAccent: '#52525b',
              },
            },
          },
        }}
        theme='dark'
      />
    </div>
  )
}
