'use client'
import React from 'react'
import { Chat } from '@/components/ui/chat'

export default function ChatPage() {
  return (
    <div className='flex flex-col w-full gap-6 grow my-2 sm:my-10 p-4 sm:p-8 rounded-sm overflow-y-auto'>
      <Chat />
    </div>
  )
}
