import SidebarItem from '@/components/layout/SidebarItem'
import { HomeIcon, } from '@heroicons/react/16/solid'
import { PencilSquareIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import { PlusCircleIcon } from '@heroicons/react/20/solid'
import { ArrowDownCircleIcon, CpuChipIcon, HomeModernIcon } from '@heroicons/react/24/outline'
import { Cog6ToothIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {}

const items = [
  { name: "Home", href: "", icon: <HomeIcon className='w-8 h-8 text-white'/> }, { name: "Summaries", href: "", icon: <PlusCircleIcon className='w-8 h-8 text-white' /> }, { name: "New Summary", href: "", icon: <PencilSquareIcon className='h-8 w-8 text-white'/> }, 
  { name: "About", href: "", icon: <QuestionMarkCircleIcon className='h-8 w-8 text-white'/>, }
]
const navigation = [
    { name: "Product", href: "/product" },
    { name: "Features", href: "#" },
];
const Product = (props: Props) => {
  return (
    <div className='bg-white grid-cols-5 grid h-screen'>
      <div className='col-span-1 bg-white'>
        <div className='grid py-4 px-4 h-full rounded-sm space-y-24 bg-indigo-600 flex-col'>
          <CpuChipIcon className='text-white h-16 w-16'/>
          <div className='flex flex-col space-y-6 items-center'>
            {items.map((item) => (
              <div key={item.name} className='flex bg-indigo-700 flex-row items-center p-2 space-x-5 w-full rounded-md hover:bg-indigo-900 '>
              {item.icon}
              <p className='text-base text-gray-200 font-semibold'>{item.name}</p>
            </div>
            ))}
          </div>
          <div className='flex'>
             <div className='flex self-end bg-indigo-700 flex-row items-center p-2 space-x-5 w-full rounded-md hover:bg-indigo-900 '>
              <Cog6ToothIcon className='h-8 w-8 text-white' />
              <p className='text-base text-gray-200 font-semibold'>Settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product