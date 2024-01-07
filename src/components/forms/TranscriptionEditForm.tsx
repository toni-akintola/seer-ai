import React from 'react'
import { FormEvent } from 'react'
import {
  fileNameAtom,
  fileTypeAtom,
  handlingAtom,
  languageAtom,
  tokenSizeMessageAtom,
  transcriptionAtom,
  translateHandlerAtom,
} from '@/atoms/transcription-atoms'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'

type Props = {}

const TranscriptionEditForm = (props: Props) => {

  const handling = useAtomValue(handlingAtom)
  const fileType = useAtomValue(fileTypeAtom)
  const fileName = useAtomValue(fileNameAtom)
  const setLanguage = useSetAtom(languageAtom)
  const [transcription, setTranscription] = useAtom(transcriptionAtom)
  const translateHandler = useSetAtom(translateHandlerAtom)
  const tokenSizeMessage = useAtomValue(tokenSizeMessageAtom)

    const downloadHandler = () => {
    const blob = new Blob([transcription], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.download = `${fileName.split(".")[0] ?? fileName}.${fileType}`
    a.href = url
    a.click()
  }

  return (
    <form className='space-y-6'    onSubmit={async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (tokenSizeMessage.type !== "success") return  
        try {
          await translateHandler()
        } catch (error: any) {
            <div></div>
        }
    }}
    >
        <textarea name='transcription' className='h-96' value={transcription}  onChange={(event) => {
          setTranscription(event.target.value)
        }}/>
        <div className="flex items-center gap-2">
        <div
          className={
            "w-2 h-2 rounded-full inline-block " +
            (tokenSizeMessage.type === "success"
              ? "bg-green-500"
              : tokenSizeMessage.type === "warning"
              ? "bg-yellow-400"
              : "bg-red-500")
          }
        />
        <div className="text-sm text-neutral-500">
          {tokenSizeMessage.message}
        </div>
      </div>
      <div className='flex items-center gap-6'>
        <button type="button" className='bg-teal-400 rounded-md p-2 m-4 w-full text-white font-bold hover:bg-teal-500' onClick={downloadHandler}>Download</button>
      </div>
    </form>
  )
}

export default TranscriptionEditForm
