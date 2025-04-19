import { createClient } from 'next-sanity'
import { useCopyErrorDetails } from 'sanity'

// import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "v2025-04-18",
  token: process.env.SANITY_ACCESS_TOKEN,
  useCdn : true
})

// await client.fetch("")
