'use client'

import { FileUploadInput } from '@/components/form/FileUploadInput'
import { toast } from '@/components/old-ui/use-toast'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import React from 'react'
import { Database } from '../../../../types_db'
import Link from 'next/link'

const UploadNote = () => {
  const supabase = createClientComponentClient<Database>()

  return (
    <div className='max-w-6xl m-4 sm:m-10 flex flex-col gap-8 grow items-stretch'>
      <div className='h-40 flex flex-col justify-center items-center border-b pb-8'>
        <h2>
          Files must be converted to markdown before being uploaded. An
          automatic converter will be added soon.
        </h2>
        <Link
          className='text-indigo-500 font-bold'
          href='https://cloudconvert.com/md-converter'
        >
          To convert files into markdown, use this link.
        </Link>
        <FileUploadInput
          onChange={async e => {
            const selectedFile = e.target.files?.[0]
            if (selectedFile) {
              const { error } = await supabase.storage
                .from('files')
                .upload(
                  `${crypto.randomUUID()}/${selectedFile.name}`,
                  selectedFile,
                )

              if (error) {
                toast({
                  variant: 'destructive',
                  description:
                    'There was an error uploading the file. Please try again.',
                })
                return
              }
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
