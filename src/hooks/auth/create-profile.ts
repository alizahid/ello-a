import { gql, useMutation } from '@apollo/client'
import { useCallback } from 'react'

import {
  Mutation,
  MutationInsertIntoUserCollectionArgs,
  UserInsertInput
} from '../../types/graphql'
import { PROFILE } from './profile'

export const CREATE_PROFILE = gql`
  mutation createProfile($objects: [UserInsertInput!]!) {
    insertIntoUserCollection(objects: $objects) {
      affectedCount
    }
  }
`

type Returns = {
  error?: string
  loading: boolean

  createProfile: (data: UserInsertInput) => Promise<boolean>
}

export const useCreateProfile = (): Returns => {
  const [mutate, { error, loading }] = useMutation<
    Pick<Mutation, 'insertIntoUserCollection'>,
    MutationInsertIntoUserCollectionArgs
  >(CREATE_PROFILE)

  const createProfile: Returns['createProfile'] = useCallback(
    async (data) => {
      const response = await mutate({
        refetchQueries: [
          {
            query: PROFILE,
            variables: {
              filter: {
                id: {
                  eq: data.id
                }
              }
            }
          }
        ],
        variables: {
          objects: [data]
        }
      })

      return response.data.insertIntoUserCollection.affectedCount > 0
    },
    [mutate]
  )

  return {
    createProfile,
    error: error?.message,
    loading
  }
}
