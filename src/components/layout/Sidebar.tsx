import React from 'react'
import {
  DocumentTextIcon,
  PencilSquareIcon,
  QuestionMarkCircleIcon,
  HomeIcon,
  CreditCardIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'

const items = [
  {
    name: 'Home',
    href: '/product',
    icon: <HomeIcon className='h-8 w-8 text-white' />,
  },
  {
    name: 'New Note',
    href: '/product/new-summary',
    icon: <PencilSquareIcon className='h-8 w-8 text-white' />,
  },
  {
    name: 'Note',
    href: '/product/summaries',
    icon: <DocumentTextIcon className='h-8 w-8 text-white' />,
  },
  {
    name: 'About',
    href: '/',
    icon: <QuestionMarkCircleIcon className='h-8 w-8 text-white' />,
  },
  {
    name: 'Buy Credits',
    href: '/product/transaction',
    icon: <CreditCardIcon className='h-8 w-8 text-white' />,
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
            className='flex w-full flex-row items-center space-x-5 rounded-md bg-teal-500 p-2 hover:bg-teal-900 '
          >
            {item.icon}
            <p className='text-base font-extrabold text-white'>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
