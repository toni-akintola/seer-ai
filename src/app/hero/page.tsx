import React from 'react'
import { CpuChipIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { getSession } from '../server/supabase-server'
import { ApertureIcon } from 'lucide-react'

type Props = {}

const Hero = async (props: Props) => {
  const session = await getSession()
  return (
    <div className='flex h-screen justify-center bg-gradient-to-b from-teal-600 via-teal-400 to-teal-200'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <Link
              href='#'
              className='-m-1.5 p-1.5 flex-row items-center flex space-x-3'
            >
              <ApertureIcon className='h-12 w-12 text-white' />
              <h1 className='text-xl font-extrabold tracking-tight text-white'>
                Seer
              </h1>
            </Link>
          </div>
          <div className='flex lg:hidden'></div>

          <div className='lg:flex lg:flex-1 lg:justify-end'>
            {session ? (
              <form
                action='/auth/signout'
                method='post'
                className='flex items-center'
              >
                <button
                  className='text-sm font-semibold leading-6 text-white'
                  type='submit'
                >
                  Sign out <span aria-hidden='true'>&rarr;</span>
                </button>
              </form>
            ) : (
              <Link
                href='/login'
                className='text-sm font-semibold leading-6 text-white'
              >
                Log in <span aria-hidden='true'>&rarr;</span>
              </Link>
            )}
          </div>
        </nav>
      </header>
      <div className='relative isolate flex px-6 pt-10 lg:px-8'>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='sm:py-42 lg:pt-58 mx-auto max-w-2xl pt-64'>
          <div className='space-y-12 text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
              A GPT-powered knowledge management system
            </h1>

            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Link
                href='/product'
                className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-teal-400 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Get started
              </Link>
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-white'
              >
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
            <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
              <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                By creating an account, you agree to our terms of service.{' '}
                <a href='#' className='font-bold text-white'>
                  <span className='absolute inset-0' aria-hidden='true' />
                  Read more <span aria-hidden='true'>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
