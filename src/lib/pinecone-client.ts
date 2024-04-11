import { Pinecone } from '@pinecone-database/pinecone'
import { delay } from '../../utils/helpers'

let pineconeClientInstance: Pinecone | null = null

async function createIndex(client: Pinecone, indexName: string) {
  try {
    await client.createIndex({
      name: process.env.PINECONE_INDEX_NAME!,
      dimension: 1536,
      metric: 'cosine',
      spec: {
        serverless: {
          cloud: 'aws',
          region: 'us-west-2',
        },
      },
    })
    // console.log(`Waiting for ${process.env.INDEX_INIT_TIMEOUT!} seconds for index initialization to complete...`);
    // await delay(Number(process.env.INDEX_INIT_TIMEOUT!));
    console.log('Index created !!')
  } catch (error) {
    console.error('error ', error)
    throw new Error('Index creation failed')
  }
}

// Initialize index and ready to be accessed.
async function initPineconeClient() {
  try {
    const pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY!,
    })

    const indexName = process.env.PINECONE_INDEX_NAME!

    const existingIndexes = await pinecone.listIndexes()

    const indexExists = existingIndexes.indexes?.filter(
      index => index.name === indexName,
    )
    console.log(indexExists?.length)
    if (indexExists?.length === 0) {
      createIndex(pinecone, indexName)
    } else {
      console.log('Your index already exists!')
    }

    return pinecone
  } catch (error) {
    console.error('error', error)
    throw new Error('Failed to initialize Pinecone Client')
  }
}

export async function getPineconeClient() {
  if (!pineconeClientInstance) {
    pineconeClientInstance = await initPineconeClient()
  }

  return pineconeClientInstance
}
