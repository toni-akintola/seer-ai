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
      </Link>
      <div className='flex flex-row justify-center space-x-3 rounded-md items-center'>
        <p className='text-base text-nowrap font-semibold text-white'>
          Credits: 500
        </p>

        <Link
          className='flex w-full flex-row items-center space-x-5 rounded-md p-2 hover:bg-teal-900 '
          href='/product/account'
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
          href='/'
        >
          <Cog6ToothIcon className='h-8 w-8 text-white' />
        </Link>
        <form
          action='/auth/signout'
          method='post'
          className='flex items-center'
        >
          <button
            className='flex w-full flex-row items-center space-x-5 rounded-m p-2 hover:bg-teal-900 '
            type='submit'
          >
            <ArrowRightCircleIcon className='h-8 w-8 text-white' />
            <p className='text-base font-semibold text-white text-nowrap'>
              Sign Out
            </p>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Navbar
