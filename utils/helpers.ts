import { Database } from '../types_db'
import { ChatGPTMessage } from '../types/openai'
import { Message } from 'ai'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { customAlphabet } from 'nanoid'
type Price = Database['public']['Tables']['prices']['Row']

export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/'
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`
  // Make sure to including trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
  return url
}

export const postData = async ({
  url,
  data,
}: {
  url: string
  data?: { price: Price }
}) => {
  console.log('posting,', url, data)

  const res = await fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    console.log('Error in postData', { url, data, res })

    throw Error(res.statusText)
  }

  return res.json()
}

export const toDateTime = (secs: number) => {
  var t = new Date('1970-01-01T00:30:00Z') // Unix epoch start.
  t.setSeconds(secs)
  return t
}

export const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  7,
) // 7-character random string

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export function scrollToBottom(containerRef: React.RefObject<HTMLElement>) {
  if (containerRef.current) {
    const lastMessage = containerRef.current.lastElementChild
    if (lastMessage) {
      const scrollOptions: ScrollIntoViewOptions = {
        behavior: 'smooth',
        block: 'end',
      }
      lastMessage.scrollIntoView(scrollOptions)
    }
  }
}

// Reference:
// github.com/hwchase17/langchainjs/blob/357d6fccfc78f1332b54d2302d92e12f0861c12c/examples/src/guides/expression_language/cookbook_conversational_retrieval.ts#L61
export const formatChatHistory = (chatHistory: [string, string][]) => {
  const formattedDialogueTurns = chatHistory.map(
    dialogueTurn => `Human: ${dialogueTurn[0]}\nAssistant: ${dialogueTurn[1]}`,
  )

  return formattedDialogueTurns.join('\n')
}

export function formattedText(inputText: string) {
  return inputText
    .replace(/\n+/g, ' ') // Replace multiple consecutive new lines with a single space
    .replace(/(\w) - (\w)/g, '$1$2') // Join hyphenated words together
    .replace(/\s+/g, ' ') // Replace multiple consecutive spaces with a single space
}

// Default UI Message
export const initialMessages: Message[] = [
  {
    role: 'assistant',
    id: '0',
    content:
      'Hi! I am your PDF assistant. I am happy to help with your questions about your PDF about German law.',
  },
]

interface Data {
  sources: string[]
}

// Maps the sources with the right ai-message
export const getSources = (data: Data[], role: string, index: number) => {
  if (role === 'assistant' && index >= 2 && (index - 2) % 2 === 0) {
    const sourcesIndex = (index - 2) / 2
    if (data[sourcesIndex] && data[sourcesIndex].sources) {
      return data[sourcesIndex].sources
    }
  }
  return []
}
