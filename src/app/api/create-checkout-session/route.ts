import { cookies, headers } from 'next/headers'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { stripe } from '../../../../utils/stripe'
import { createOrRetrieveCustomer } from '../../../../utils/supabase-admin'
import { getURL } from '../../../../utils/helpers'
import { Database } from '../../../../types_db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const session = await stripe.checkout.sessions.create({
    success_url: 'http://localhost:3000/product/transaction',
    cancel_url: 'http://localhost:3000/product/transaction',
    line_items: [
      {
        price: 'price_1OXEI5GV4YWCijWAbiSOnGRw',
        quantity: 1,
      },
    ],
    mode: 'payment',
  })
  return NextResponse.json(session.id)
}
