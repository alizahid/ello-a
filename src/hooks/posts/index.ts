import { gql, useQuery } from '@apollo/client'

import { Post, Query } from '../../types/graphql'

export const POSTS = gql`
  query posts {
    postCollection(orderBy: [{ createdAt: DescNullsLast }]) {
      edges {
        node {
          id
          body
          createdAt
          updatedAt
          user {
            id
            name
            image
          }
          commentCollection {
            edges {
              node {
                userId
              }
            }
          }
          likeCollection {
            edges {
              node {
                userId
              }
            }
          }
        }
      }
    }
  }
`

type Returns = {
  loading: boolean
  posts: Array<Post>
}

export const usePosts = (): Returns => {
  const { data, loading } = useQuery<Pick<Query, 'postCollection'>>(POSTS)

  return {
    loading,
    posts: data?.postCollection.edges.map(({ node }) => node)
  }
}
