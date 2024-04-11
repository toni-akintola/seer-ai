import Login from '../login/page'
import React from 'react'
import { Database } from '../../../types_db'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { getSession } from '../server/supabase-server'
import { Chat } from '@/components/ui/chat'

type Props = {}

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  {
    name: 'Material',
    description:
      'Solid walnut base with rare earth magnets and powder coated steel card cover',
  },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  {
    name: 'Considerations',
    description:
      'Made from natural materials. Grain and color vary with each item.',
  },
]

const Product = async (props: Props) => {
  const supabase = createServerComponentClient<Database>({ cookies })
  const session = await getSession()
  return (
    <>
      {session ? (
        <div className='flex flex-col w-full gap-6 grow my-2 sm:my-10 p-4 sm:p-8 rounded-sm overflow-y-auto'>
          <Chat />
        </div>
      ) : (
        // <div className='col-span-5 grid h-screen grid-cols-5 border-gray-300 lg:col-span-7 justify-center'>
        //   <div className='col-span-5 m-2 grid max-w-full justify-center rounded-lg border border-gray-200 bg-white px-6 py-4 shadow-lg'>
        //     <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
        //       Status Report
        //     </h2>
        //     <div className='flex flex-row items-center gap-x-2'>
        //       <h3 className=' text-gray-500 text-2xl'>You are:</h3>
        //       <h3 className='text-green-400 text-2xl'>On track</h3>
        //     </div>

        //     <dl className='mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
        //       {features.map(feature => (
        //         <div
        //           key={feature.name}
        //           className='border-t border-gray-200 pt-4'
        //         >
        //           <dt className='font-medium text-gray-900'>{feature.name}</dt>
        //           <dd className='mt-2 text-sm text-gray-500'>
        //             {feature.description}
        //           </dd>
        //         </div>
        //       ))}
        //     </dl>
        //   </div>
        // </div>
        <Login />
      )}
    </>
  )
}

export default Product
