import { PDFLoader } from 'langchain/document_loaders/fs/pdf'
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'

export async function getChunkedDocsFromPDF(path: string | Blob) {
  try {
    const loader = new PDFLoader(path)
    const docs = await loader.load()

    // From the docs https://www.pinecone.io/learn/chunking-strategies/
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    })

    const chunkedDocs = await textSplitter.splitDocuments(docs)

    return chunkedDocs
  } catch (e) {
    console.error(e)
    throw new Error('PDF docs chunking failed !')
  }
}