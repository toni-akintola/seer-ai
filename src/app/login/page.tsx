'use client'

import { useSupabase } from '../client/supabase-provider'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export default function AuthUI() {
  const { supabase } = useSupabase()
  return (
    <div className='flex flex-col space-y-4 h-screen items-center justify-center p-4'>
      <div className='flex lg:p-20 p-8 items-center justify-center bg-white rounded-md'>
        <Auth
          supabaseClient={supabase}
          providers={['github', 'google']}
          redirectTo={'http://localhost:3000/auth/callback'}
          magicLink={true}
          appearance={{
            theme: ThemeSupa,
            extend: true,
            style: {
              container: { width: '300px' },
            },
            variables: {
              default: {
                colors: {
                  brand: '#3730a3',
                  brandAccent: '#3730a3 ',
                },
              },
            },
          }}
        />
      </div>
    </div>
  )
}
