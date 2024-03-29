import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

import { nanoid } from '../../../../utils/helpers'
import { getSession } from '../../server/supabase-server'

export const runtime = 'edge'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  const json = await req.json()
  const { messages, previewToken } = json

  const session = await getSession()
  const userId = session?.user.id

  if (!userId) {
    return new Response('Unauthorized', {
      status: 401,
    })
  }

  const res = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages,
    temperature: 0.7,
    stream: true,
  })

  const stream = OpenAIStream(res, {
    async onCompletion(completion) {
      const title = json.messages[0].content.substring(0, 100)
      const id = json.id ?? nanoid()
      const createdAt = Date.now()
      const path = `/chat/${id}`
      const payload = {
        id,
        title,
        userId,
        createdAt,
        path,
        messages: [
          ...messages,
          {
            content: completion,
            role: 'assistant',
          },
        ],
      }
    },
  })
  return new StreamingTextResponse(stream)
}
