import axios, { AxiosError } from 'axios'

export async function summarizeTranscript(transcription: string): Promise<any> {
  const apiKEY = process.env.OPENAI_API_KEY
  try {
    const summaryResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `Summarize the following text. Provide a short summary of the meeting and a bulleted list of the main meeting highlights : ${transcription}`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKEY}`,
          'Content-Type': 'application/json',
        },
      },
    )

    // Destructure the summary from the response
    const {
      message: { content: summary },
    } = summaryResponse.data.choices[0]
    return { summary }

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
