'use client'

import { formStateAtom } from '../../atoms/transcription-atoms'
import TranscribeForm from './TranscribeForm'
import TranscriptionEditForm from './TranscriptionEditForm'
import { useAtomValue } from 'jotai'

import React from 'react'

type Props = {}

const Transcribe = (props: Props) => {
  const formState = useAtomValue(formStateAtom)

  return (
    <div>
      {formState === 'transcribe' ? (
        <TranscribeForm />
      ) : (
        <TranscriptionEditForm />
      )}
    </div>
  )
}

export default Transcribe
