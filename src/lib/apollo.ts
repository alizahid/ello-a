import { ApolloClient, InMemoryCache } from '@apollo/client'

import { SUPABASE_KEY, SUPABASE_URL } from './config'

export const createClient = (token?: string) => {
  const headers: Record<string, string> = {
    apiKey: SUPABASE_KEY
  }

  if (token) {
    headers.authorization = `Bearer ${token}`
  }

  return new ApolloClient({
    cache: new InMemoryCache(),
    headers,
    uri: `${SUPABASE_URL}/graphql/v1`
  })
}
