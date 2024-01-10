import { getServerSession } from 'next-auth/next'
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'
import RootLayout from '@/app/layout'
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '../../../types_db'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return (
    <>
      {user ? (
        <div>
          {' '}
          <Navbar image={''} name={user?.email || ''} />
          <div className='grid h-screen grid-cols-6 bg-gray-100 lg:grid-cols-8 overflow-scroll grid-rows-1'>
            <Sidebar />
            <div className='col-span-6 flex flex-col justify-between w-full h-screen border-gray-300 lg:col-span-7'>
              {children}
            </div>
          </div>{' '}
        </div>
      ) : (
        <RootLayout>{children}</RootLayout>
      )}
    </>
  )
}
