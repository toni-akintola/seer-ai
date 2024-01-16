import React from 'react'
import {
  DocumentTextIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
  HomeIcon,
  CreditCardIcon,
  WrenchIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'
import { ApertureIcon, UploadCloudIcon } from 'lucide-react'

const items = [
  {
    name: 'Home',
    href: '/product',
    icon: <HomeIcon className='h-8 w-8 text-white' />,
  },

  {
    name: 'Transcribe',
    href: '/product/transcribe',
    icon: <UploadCloudIcon className='h-8 w-8 text-white' />,
  },

  {
    name: 'New Note',
    href: '/product/new-note',
    icon: <PencilSquareIcon className='h-8 w-8 text-white' />,
  },

  {
    name: 'Notes',
    href: '/product/notes',
    icon: <DocumentTextIcon className='h-8 w-8 text-white' />,
  },
  {
    name: 'Seer',
    href: '/product/seer',
    icon: <ApertureIcon className='h-8 w-8 text-white' />,
  },

  {
    name: 'Donate',
    href: '/product/transaction',
    icon: <CreditCardIcon className='h-8 w-8 text-white' />,
  },
  {
    name: 'Tools',
    href: '/product/tools',
    icon: <WrenchIcon className='h-8 w-8 text-white' />,
  },
  {
    name: 'About',
    href: '/',
    icon: <QuestionMarkCircleIcon className='h-8 w-8 text-white' />,
  },
]

const Sidebar: React.FunctionComponent = () => {
  return (
    <div className='grid flex-col gap-y-4 border-r border-gray-900/10 bg-indigo-800 lg:p-2 h-screen'>
      <div className='flex flex-col justify-center space-y-3 rounded-md items-center'>
        {items.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className='flex w-full flex-row items-center space-x-2 lg:space-x-5 rounded-md bg-inherit lg:bg-indigo-900 py-2 px-2'
          >
            {item.icon}
            <p className='text-transparent text-xs lg:text-base font-extrabold lg:text-white'>
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
