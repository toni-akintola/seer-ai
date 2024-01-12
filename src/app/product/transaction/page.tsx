import React, { useState } from 'react'
import Pricing from '@/components/pricing/Pricing'
import { getSession } from '@/app/server/supabase-server'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

type Props = {}

const Transaction = async (props: Props) => {
  const checkout = false
  const session = await getSession()
  const user = session!.user
  // React.useEffect(() => {
  //   // Check to see if this is a redirect back from Checkout
  //   const query = new URLSearchParams(window.location.search)
  //   if (query.get('success')) {
  //     console.log('Order placed! You will receive an email confirmation.')
  //     setCheckout(true)
  //   }

  //   if (query.get('canceled')) {
  //     console.log(
  //       'Order canceled -- continue to shop around and checkout when you’re ready.',
  //     )
  //   }
  // }, [])

  return checkout ? (
    <div>Confirmed payment!</div>
  ) : (
    <Pricing user={user} session={session} />
  )
}

export default Transaction
