import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'
import RootLayout from '@/app/layout'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(options)
  return (
    <>
      {session ? (
        <div>
          {' '}
          <Navbar
            image={session.user?.image || ''}
            name={session.user?.name || ''}
          />
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
