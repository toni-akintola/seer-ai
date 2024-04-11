'use client'
import { Button } from '@/components/ui/button'
import { ChatBubble } from '@/components/ui/chat-bubble'
import { Input } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'
import { Data, getSources, initialMessages, scrollToBottom } from '@/lib/utils'
import { Message, useChat } from 'ai/react'
import { useEffect, useRef } from 'react'

export function Chat() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { messages, input, handleInputChange, handleSubmit, isLoading, data } =
    useChat({
      initialMessages,
    })

  const sources = data as unknown as Data[]
  useEffect(() => {
    setTimeout(() => scrollToBottom(containerRef), 100)
  }, [messages])

  return (
    <div className='rounded-2xl border h-[75vh] flex flex-col justify-between'>
      <div className='p-6 overflow-auto' ref={containerRef}>
        {messages.map(({ id, role, content }: Message, index) => (
          <ChatBubble
            key={id}
            role={role}
            content={content}
            sources={sources?.length ? getSources(sources, role, index) : []}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit} className='p-4 flex clear-both'>
        <Input
          value={input}
          placeholder='Type to chat with Seer...'
          onChange={handleInputChange}
          className='mr-2'
        />

        <Button type='submit' className='w-24'>
          {isLoading ? <Spinner /> : 'Send'}
        </Button>
      </form>
    </div>
  )
}
