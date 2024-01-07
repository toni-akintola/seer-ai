'use client'
import Transcribe from '@/components/form/Transcribe'
import React from 'react'

export interface Props {}

const NewSummary = (props: Props) => {
  return (
    <div className='col-span-7 m-5 grid'>
      <Transcribe />
    </div>
  )
}

export default NewSummary
