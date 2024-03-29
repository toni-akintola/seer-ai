import { NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(request: Request) {
  // Get formData from request
  const formData = await request.formData()
  // FormData
  /* 
  file: File
  model: string
  response_format: string
  prompt: string
  language: string (optional)
  */
  formData.append('model', 'whisper-1')
  const apiKey = process.env.OPENAI_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      {
        message:
          'You need to set your API Key as env variable or with the input.',
      },
      { status: 401, statusText: 'Unauthorized' },
    )
  }

  try {
    const { data } = await axios.post(
      'https://api.openai.com/v1/audio/transcriptions',
      formData,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    )
    return NextResponse.json({ data })
  } catch (error: any) {
    console.log(error.response.data.error.message)
    return NextResponse.json({ message: 'Error' })
  }
}
