import { NextResponse } from 'next/server'

import { OpenAIStream } from '../../../../lib/openai'

export async function POST(request: Request) {
  // Get formData from request
  const body = await request.json()
  const { max_tokens, messages } = body
  const api_key = process.env.OPENAI_API_KEY
if (!api_key) {
    return NextResponse.json(
      {
        message:
          'You need to set your API Key as env variable or with the input.',
      },
      { status: 401, statusText: 'Unauthorized' },
    )
  }
  try {
    const stream = await OpenAIStream({
      model: 'gpt-3.5-turbo',
      messages,
      max_tokens,
      temperature: 0.9,
      stream: true,
      api_key,
    })
    return new Response(stream)
  } catch (error: any) {
    console.log(error.response.data.error.message)
    return NextResponse.json({
      message: error?.response?.data?.error?.message ?? 'An error occured.',
    })
  }
}
