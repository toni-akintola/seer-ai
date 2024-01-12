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
import { UploadCloudIcon } from 'lucide-react'

const items = [
  {
    name: 'Home',
    href: '/product',
    icon: <HomeIcon className='h-8 w-8 text-white' />,
  },

  {
    name: 'Transcribe',
    href: '/product/new-summary',
    icon: <UploadCloudIcon className='h-8 w-8 text-white' />,
  },

  {
    name: 'New Note',
    href: '/product/new-summary',
    icon: <PencilSquareIcon className='h-8 w-8 text-white' />,
  },

  {
    name: 'Notes',
    href: '/product/summaries',
    icon: <DocumentTextIcon className='h-8 w-8 text-white' />,
  },
  {
    name: 'Talk to Seer',
    href: '/product/seer',
    icon: <ChatBubbleLeftEllipsisIcon className='h-8 w-8 text-white' />,
  },

  {
    name: 'Buy Credits',
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
    <div className='grid flex-col gap-y-4 border-r border-gray-900/10 bg-teal-400 px-4 py-4 h-screen'>
      <div className='flex flex-col justify-center space-y-3 rounded-md'>
        {items.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className='flex w-full flex-row items-center justify-center lg:justify-normal space-x-5 rounded-md bg-inherit lg:bg-teal-500 py-4 lg:p-2 hover:bg-teal-900 '
          >
            {item.icon}
            <p className='text-transparent lg:text-base font-extrabold lg:text-white'>
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
