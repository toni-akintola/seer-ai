import {
  ArrowRightCircleIcon,
  Cog6ToothIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline'

import React from 'react'
import Link from 'next/link'

export interface NavBarProps {
  image?: string
  name: string
}

const Navbar = (props: NavBarProps) => {
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
          {props.image ? (
            <img
              className='inline-block h-8 w-8 rounded-full'
              width={8}
              height={8}
              src={props.image}
              alt=''
            />
          ) : (
            <div className='h-8 w-8 rounded-full bg-gradient-to-b from-indigo-600 via-rose-400 to-amber-200'></div>
          )}
          <p className='text-base font-semibold text-white'>{props.name}</p>
        </Link>
        <Link
          className='flex w-full flex-row items-center space-x-5 rounded-m p-2 hover:bg-teal-900 '
          href='/api/auth/signout'
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
