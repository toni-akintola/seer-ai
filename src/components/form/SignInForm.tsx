'use client'
import React, { useState } from 'react'
import GoogleButton from '../misc/GoogleButton'
import MSButton from '../misc/MSButton'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type Props = {}

const SignInForm = (props: Props) => {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const signInResponse = await signIn('credentials', {
      email: data.get('email'),
      password: data.get('password'),
      redirect: false,
    })

    if (signInResponse && !signInResponse.error) {
      router.push('/product')
    } else {
      console.log('Error: ', signInResponse)
      setError('Your email or password is wrong!')
    }
  }
  return (
    <>
      <div className='flex flex-col items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white'>
          Sign in to your account
        </h2>
      </div>
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' onSubmit={handleSubmit}>
          {error && (
            <span className='p-4 mb-2 font-semibold text-white bg-red-500 rounded-md'>
              {error}
            </span>
          )}
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-white'
            >
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                //   type='email'
                //   autoComplete='email'
                //   required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>
          <div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-white'
              >
                Password
              </label>
              <div className='text-sm'>
                <Link
                  href='/'
                  className='font-semibold text-indigo-900 hover:text-indigo-500'
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
            <div className='m-10 flex flex-col items-center gap-y-4'>
              <GoogleButton />
              <MSButton />
            </div>
          </div>
          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Sign in
            </button>
          </div>
        </form>
        <p className='mb-5 mt-10 text-center text-sm text-white'>
          Not a member?{' '}
          <Link
            href='/sign-up'
            className='font-semibold leading-6 text-indigo-800 hover:text-indigo-500'
          >
            Sign up here.
          </Link>
        </p>
      </div>
    </>
  )
}

export default SignInForm
