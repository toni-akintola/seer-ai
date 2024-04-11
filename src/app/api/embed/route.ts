import { getChunkedDocsFromPDF } from '@/lib/pdf-loader'
import { getPineconeClient } from '@/lib/pinecone-client'
import { embedAndStoreDocs } from '@/lib/vector-store'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const file = await request.blob()

  if (!file) {
    return NextResponse.json({ error: 'No files received.' }, { status: 400 })
  }

  try {
    const pineconeClient = await getPineconeClient()
    console.log('Preparing chunks from PDF file')
    const docs = await getChunkedDocsFromPDF(process.env.PDF_PATH!)
    console.log(`Loading ${docs.length} chunks into pinecone...`)
    await embedAndStoreDocs(pineconeClient, docs)
    return NextResponse.json({ Message: 'Success', status: 201 })
  } catch (error) {
    console.log('Error occured ', error)
    return NextResponse.json({ Message: 'Failed', status: 500 })
  }
}
