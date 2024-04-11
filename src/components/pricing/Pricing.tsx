'use client'
import React, { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { Session, User } from '@supabase/supabase-js'
import { getStripe } from '../../../utils/stripe-client'
import { postData } from '../../../utils/helpers'
import { useRouter } from 'next/navigation'
import { Database } from '../../../types_db'
import axios from 'axios'

const includedFeatures = [
  'Upload PDFs & DOCXs',
  'Translate your notes',
  'Larger allowed upload sizes',
  'GPT-4 Vision integration',
]

interface Props {
  session: Session | null
  user: User | null | undefined
}

type Price = Database['public']['Tables']['prices']['Row']

const Pricing = ({ session, user }: Props) => {
  const router = useRouter()
  const [price, setPrice] = useState('price_1OXEI5GV4YWCijWAbiSOnGRw')
  const handleCheckout = async () => {
    if (!user) {
      return router.push('/')
    }

    try {
      const { data } = await axios.post('/api/create-checkout-session', price)
      const sessionId = data
      const stripe = await getStripe()
      stripe?.redirectToCheckout({ sessionId })
    } catch (error) {
      return alert((error as Error)?.message)
    }
  }

  return (
    <div className='col-span-5 h-screen py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl rounded-md bg-white p-6 lg:p-16'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Donate to make Seer even better!
          </h2>
          <p className='mt-6 text-lg leading-8 text-gray-600'>
            Every dollar brings Seer closer to official release!
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl rounded-3xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
          <div className='p-8 sm:p-10 lg:flex-auto'>
            <div className='mt-10 flex items-center gap-x-4'>
              <h4 className='flex-none text-sm font-semibold leading-6 text-gray-900'>
                What’s coming
              </h4>
              <div className='h-px flex-auto bg-gray-100' />
            </div>
            <ul
              role='list'
              className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'
            >
              {includedFeatures.map(feature => (
                <li key={feature} className='flex gap-x-3'>
                  <CheckIcon
                    className='h-6 w-5 flex-none text-indigo-800'
                    aria-hidden='true'
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
            <div className='rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
              <form>
                <div className='mx-auto max-w-xs px-8'>
                  <p className='mt-6 flex items-baseline justify-center gap-x-2'>
                    <span className='text-5xl font-bold tracking-tight text-gray-900'>
                      $5
                    </span>
                    <span className='text-sm font-semibold leading-6 tracking-wide text-gray-600'>
                      USD
                    </span>
                  </p>
                  <button
                    className='mt-10 block w-full rounded-md bg-indigo-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    role='link'
                    type='button'
                    onClick={() => handleCheckout()}
                  >
                    Donate
                  </button>
                  <p className='mt-6 text-xs leading-5 text-gray-600'>
                    Invoices and receipts made possible with Stripe.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
