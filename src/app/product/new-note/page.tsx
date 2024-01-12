'use client'

import { FileUploadInput } from '@/components/form/FileUploadInput'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'

type Props = {}

const UploadNote = (props: Props) => {
  const supabase = createClientComponentClient()

  return (
    <div className='max-w-6xl m-4 sm:m-10 flex flex-col gap-8 grow items-stretch'>
      <div className='h-40 flex flex-col justify-center items-center border-b pb-8'>
        <FileUploadInput
          onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
            const selectedFile = e.target.files?.[0]

            if (selectedFile) {
              await supabase.storage
                .from('files')
                .upload(
                  `${crypto.randomUUID()}/${selectedFile.name}`,
                  selectedFile,
                )
            }
          }}
          type='file'
          name='file'
        />
      </div>
    </div>
  )
}

export default UploadNote
