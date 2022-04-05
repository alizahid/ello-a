import { gql, useQuery } from '@apollo/client'

import { Query, QueryUserCollectionArgs, User } from '../../types/graphql'
import { useAuth } from './index'

export const PROFILE = gql`
  query profile($filter: UserFilter) {
    userCollection(filter: $filter) {
      edges {
        node {
          id
          email
          name
          image
          createdAt
          updatedAt
        }
      }
    }
  }
`

type Returns = {
  loading: boolean
  profile?: User

  refetch: () => void
}

export const useProfile = (): Returns => {
  const { session } = useAuth()

  const { data, loading, refetch } = useQuery<
    Pick<Query, 'userCollection'>,
    QueryUserCollectionArgs
  >(PROFILE, {
    variables: {
      filter: {
        id: {
          eq: session?.user.id
        }
      }
    }
  })

  return {
    loading,
    profile: data?.userCollection.edges.at(0)?.node,
    refetch
  }
}
