import RawForm from '@/components/forms/TranscribeForm'
import React from 'react'

export interface Props {}

const NewSummary = (props: Props) => {
  return (
    <div className='col-span-7 m-5 grid'>
      <RawForm />
    </div>
  )
}

export default NewSummary
