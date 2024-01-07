import React, { FormEvent } from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import {
  fileNameAtom,
  fileTypeAtom,
  handlingAtom,
  transcriptionHandlerAtom,
} from '@/atoms/transcription-atoms'
import { useAtomValue, useSetAtom } from 'jotai'
import { FileUploadInput } from '@/components/form/FileUploadInput'

type Props = {}

const TranscribeForm = (props: Props) => {
  const handling = useAtomValue(handlingAtom)
  const submitHandler = useSetAtom(transcriptionHandlerAtom)
  const setFileName = useSetAtom(fileNameAtom)
  const setFileType = useSetAtom(fileTypeAtom)
  return (
    <form
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        submitHandler(formData)
      }}
    >
      <div className='space-y-24'>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-xl font-bold leading-7 text-gray-900'>
            New Summary
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='col-span-full'>
              <label
                htmlFor='about'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                What kind of summary would you like? (optional)
              </label>
              <div className='mt-2'>
                <input
                  id='prompt'
                  name='prompt'
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  defaultValue={''}
                ></input>
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='cover-photo'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Audio/video file
              </label>
              <div className='mt-2 flex justify-center rounded-lg border border-gray-900/10 px-6 py-10'>
                <div className='text-center'>
                  <PhotoIcon
                    className='mx-auto h-12 w-12 text-gray-300'
                    aria-hidden='true'
                  />
                  <div className='mt-4 flex items-center text-sm leading-6 text-gray-600'>
                        <FileUploadInput
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFileName(e?.target?.files?.[0]?.name as string)
          }}
          type="file"
          max={25 * 1024 * 1024}
          accept="audio/*,video/*"
          name="file"
        />
                   
                  </div>
                  <p className='text-xs leading-5 text-gray-600'>
                    PNG, JPG, GIF, MP4, MOV, etc. up to 25MB
                  </p>
                  <input name='response_format' defaultValue="vtt"></input>
                  <button
                    className='bg-teal-400 rounded-md p-2 m-4 w-full text-white font-bold hover:bg-teal-500'
                    type='submit'
                  >
                    {!handling ? (
                      'Transcribe'
                    ) : (
                      <span className='animate-pulse'>Transcribing...</span>
                    )}{' '}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default TranscribeForm
