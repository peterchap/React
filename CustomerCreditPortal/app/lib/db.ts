import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

// Disable prefetch as it's not supported for "Transaction" pool mode
const connectionString = process.env.DATABASE_URL || ''

const client = postgres(connectionString, { 
  prepare: false,
  max: 1, // Vercel limits connections
})

export const db = drizzle(client)

// Type for database instance
export type Database = typeof db