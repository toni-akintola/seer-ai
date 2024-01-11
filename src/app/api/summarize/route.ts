import axios, { AxiosError } from 'axios'
import { OpenAIStream } from '../../../../lib/openai';

export async function POST (request: Request) {

  const body = await request.json()
  const { max_tokens, messages } = body

  const api_key = process.env.OPENAI_API_KEY as string
  
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
    // Handle errors in the process
  } catch (error: unknown) {
    if (error instanceof AxiosError && error.response) {
      const errorResponse = error.response.data
      const statusCode = error.response.status || 500
      const statusText = error.response.statusText || 'Internal Server Error'
      const errorMessage =
        errorResponse?.error.message ||
        `Error ${statusCode} ${statusText}: An error occurred while generating the summary`
      throw new Error(errorMessage)
    }
    throw new Error('Internal Server Error')
  }
}
