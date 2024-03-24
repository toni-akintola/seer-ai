'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '../../../../utils/helpers'
import { Database } from '../../../../types_db'
import { usePipeline } from '../../../../lib/hooks/use-pipeline'
import { useChat } from 'ai/react'
import { ApertureIcon } from 'lucide-react'
import { createClient } from '@/app/client/supabase-provider'

export default function ChatPage() {
  const supabase = createClient()

  const generateEmbedding = usePipeline(
    'feature-extraction',
    'Supabase/gte-small',
  )

  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/chat`,
    })

  const isReady = !!generateEmbedding

  return (
    <div className='max-w-6xl flex flex-col items-center w-full h-full'>
      <div className='flex flex-col w-full gap-6 grow my-2 sm:my-10 p-4 sm:p-8 sm:border rounded-sm overflow-y-auto'>
        <div className='border-slate-400 rounded-lg flex flex-col justify-start gap-4 pr-2 grow overflow-y-scroll'>
          {messages.map(({ id, role, content }) => (
            <div
              key={id}
              className={cn(
                'rounded-xl bg-gray-500 text-white px-4 py-2 max-w-lg',
                role === 'user' ? 'self-end bg-indigo-800' : 'self-start',
              )}
            >
              {content}
            </div>
          ))}
          {isLoading && (
            <div className='self-start m-6 text-gray-500 before:text-gray-500 after:text-gray-500 dot-pulse' />
          )}
          {messages.length === 0 && (
            <div className='self-stretch flex grow items-center justify-center'>
              <ApertureIcon className='h-12 w-12' />
            </div>
          )}
        </div>
        <form
          className='flex items-center space-x-2 gap-2'
          onSubmit={async e => {
            e.preventDefault()
            if (!generateEmbedding) {
              throw new Error('Unable to generate embeddings')
            }

            const output = await generateEmbedding(input, {
              pooling: 'mean',
              normalize: true,
            })

            const embedding = JSON.stringify(Array.from(output.data))

            const {
              data: { session },
            } = await supabase.auth.getSession()

            if (!session) {
              return
            }

            handleSubmit(e, {
              options: {
                headers: {
                  authorization: `Bearer ${session.access_token}`,
                },
                body: {
                  embedding,
                },
              },
            })
          }}
        >
          <Input
            type='text'
            autoFocus
            placeholder='Send a message'
            value={input}
            onChange={handleInputChange}
          />
          <Button
            type='submit'
            className='bg-indigo-600 text-white'
            disabled={!isReady}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  )
}
