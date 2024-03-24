import React from 'react'

type Props = {}

const Input = (props: Props) => {
  return (
    <div>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <input
          type='text'
          name='price'
          id='price'
          className='block w-full lg:text-base rounded-md border-0 py-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-400 sm:text-sm sm:leading-6'
          placeholder='Talk to Seer'
        />
      </div>
    </div>
  )
}

export default Input
