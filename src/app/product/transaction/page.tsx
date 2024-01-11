'use client'
import React, { useState } from 'react'

import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Pricing from '@/components/pricing/Pricing'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

type Props = {}

const Transaction = (props: Props) => {
  const [checkout, setCheckout] = useState(false)
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.')
      setCheckout(true)
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.',
      )
    }
  }, [])

  return checkout ? <div>Confirmed payment!</div> : <Pricing />
}

export default Transaction
