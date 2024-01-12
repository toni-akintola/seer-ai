import Navbar from '../../components/layout/Navbar'
import Sidebar from '../../components/layout/Sidebar'
import RootLayout from '../layout'
import { getSession } from '../server/supabase-server'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()
  return (
    <>
      {session ? (
        <div>
          {' '}
          <Navbar image={''} name={session.user.email || ''} />
          <div className='grid max-h-screen h-screen grid-cols-6 bg-gray-100 lg:grid-cols-8 grid-rows-1'>
            <Sidebar />
            <div className='col-span-5 flex flex-col justify-between w-full h-screen max-h-screen border-gray-300 lg:col-span-7 overflow-y-auto'>
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
