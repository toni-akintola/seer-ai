import React from 'react'
import { DocumentTextIcon, PencilSquareIcon, QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import { ArrowDownCircleIcon, CpuChipIcon, HomeModernIcon } from '@heroicons/react/24/outline'
import { Cog6ToothIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const items = [
  { name: "New Summary", href: "", icon: <PencilSquareIcon className='h-8 w-8 text-white'/> }, { name: "Summaries", href: "", icon: <DocumentTextIcon className='w-8 h-8 text-white' /> },
  { name: "About", href: "/hero", icon: <QuestionMarkCircleIcon className='h-8 w-8 text-white'/>, }
]

const Sidebar: React.FunctionComponent = () => {
  return (
        <div className='grid py-4 px-4 h-full rounded-sm space-y-24 bg-indigo-800 flex-col'>
            <Link href="/hero">
                <CpuChipIcon className='text-white h-16 w-16'/>
            </Link>
            <div className='flex flex-col space-y-6 items-center'>
                {items.map((item) => (
                <Link key={item.name} href={item.href} className='flex bg-indigo-500 flex-row items-center p-2 space-x-5 w-full rounded-md hover:bg-indigo-900 '>
                {item.icon}
                <p className='text-base text-white font-extrabold'>{item.name}</p>
                </Link>
                ))}
            </div>
            <div className='flex'>
                <div className='flex self-end bg-indigo-500 flex-row items-center p-2 space-x-5 w-full rounded-md hover:bg-indigo-900 '>
                <Cog6ToothIcon className='h-8 w-8 text-white' />
                <p className='text-base text-white font-semibold'>Settings</p>
                </div>
            </div>
        </div>
)
}

export default Sidebar