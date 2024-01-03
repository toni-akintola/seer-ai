'use client'

import { formStateAtom } from '@/atoms/transcription-atoms'
import RawForm from '@/components/forms/TranscribeForm'
import { useAtomValue } from 'jotai'

import React from 'react'

type Props = {}

const Transcribe = (props: Props) => {
  const formState = useAtomValue(formStateAtom)

  return <div>{formState === 'transcribe' ? <RawForm /> : <div></div>}</div>
}

export default Transcribe
