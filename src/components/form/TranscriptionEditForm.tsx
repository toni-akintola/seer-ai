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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/form/Select'
import { TextArea } from '@/components/form/TextArea'

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
    <form className='space-y-6'    onSubmit={async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (tokenSizeMessage.type !== "success") return  
        try {
          await translateHandler()
        } catch (error: any) {
            <div>Some error has occurred. Please check your input and try again.</div>
        }
    }}
    >
        <TextArea name='transcription' className='h-96' value={transcription}  onChange={(event) => {
          setTranscription(event.target.value)
        }} />
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
      <div>
        <Select
          onValueChange={(value) => {
            setLanguage(value)
          }}
          defaultValue="spanish"
          name="language"
        >
          <SelectTrigger>
            <SelectValue placeholder="Choose a response type." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="spanish">Spanish</SelectItem>
            <SelectItem value="turkish">Turkish</SelectItem>
            <SelectItem value="german">German</SelectItem>
            <SelectItem value="french">French</SelectItem>
            <SelectItem value="italian">Italian</SelectItem>
            <SelectItem value="portuguese">Portuguese</SelectItem>
            <SelectItem value="russian">Russian</SelectItem>
            <SelectItem value="arabic">Arabic</SelectItem>
            <SelectItem value="chinese">Chinese</SelectItem>
            <SelectItem value="japanese">Japanese</SelectItem>
            <SelectItem value="korean">Korean</SelectItem>
            <SelectItem value="hindi">Hindi</SelectItem>
            <SelectItem value="indonesian">Indonesian</SelectItem>
            <SelectItem value="thai">Thai</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-6">
        <button className='bg-teal-400 rounded-md p-2 m-4 w-1/2 text-white font-bold hover:bg-teal-500' disabled={tokenSizeMessage.type !== "success"} type="submit">
          {!handling ? (
            "Translate"
          ) : (
            <span className="animate-pulse">Translating...</span>
          )}
        </button>
        <button type="button" className='bg-teal-400 rounded-md p-2 m-4 w-1/2 text-white font-bold hover:bg-teal-500' onClick={downloadHandler}>Download</button>
      </div>
    </form>
  )
}

export default TranscriptionEditForm
