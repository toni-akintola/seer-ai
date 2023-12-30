import {
  ArrowRightCircleIcon,
  Cog6ToothIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline'

import React from 'react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='bg-teal-400 flex border border-gray-900/10 px-4 justify-between'>
      <Link className='flex h-1/2 flex-row items-center space-x-4' href='/'>
        <CpuChipIcon className='h-16 w-16 text-white' />
        <h1 className='text-xl font-extrabold tracking-tight text-white'>
          Next Future
        </h1>
      </Link>
      <div className='flex flex-row justify-center space-x-3 rounded-md'>
        <Link
          className='flex w-full flex-row items-center space-x-5 rounded-m p-2 hover:bg-teal-900 '
          href='/'
        >
          <Cog6ToothIcon className='h-8 w-8 text-white' />
          <p className='text-base font-semibold text-white'>Settings</p>
        </Link>
        <Link
          className='flex w-full flex-row items-center space-x-5 rounded-md p-2 hover:bg-teal-900 '
          href='/'
        >
          <img
            className='inline-block h-8 w-8 rounded-full'
            width={8}
            height={8}
            src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
            alt=''
          />
          <p className='text-base font-semibold text-white'>Ryan</p>
        </Link>
        <Link
          className='flex w-full flex-row items-center space-x-5 rounded-m p-2 hover:bg-teal-900 '
          href='/'
        >
          <ArrowRightCircleIcon className='h-8 w-8 text-white' />
          <p className='text-base font-semibold text-white text-nowrap'>
            Sign Out
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
