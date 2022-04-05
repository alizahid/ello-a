import { gql, useQuery } from '@apollo/client'

import { Query, QueryUserCollectionArgs, User } from '../../types/graphql'

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

export const useProfile = (id: string): Returns => {
  const { data, loading, refetch } = useQuery<
    Pick<Query, 'userCollection'>,
    QueryUserCollectionArgs
  >(PROFILE, {
    variables: {
      filter: {
        id: {
          eq: id
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
