import React from 'react'

type Props = {}

const summary = (props: Props) => {
  return (
    <div className='col-span-2 m-4 mx-auto grid max-w-2xl justify-center rounded-lg border overflow-scroll border-gray-200 bg-white px-6 py-4 shadow-lg'>
      <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
        Transcript
      </h2>
      <p className=' text-gray-500'>
        The walnut wood card tray is precision milled to perfectly fit a stack
        of Focus cards. The powder coated steel divider separates active cards
        from new ones, or can be used to archive important task lists.
      </p>
    </div>
  )
}

export default summary
