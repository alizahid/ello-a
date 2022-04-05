import { useApolloClient } from '@apollo/client'
import { Buffer } from 'buffer'
import { useCallback, useState } from 'react'

import { BASE64_JPG_PREFIX } from '../../lib/config'
import { supabase } from '../../lib/supabase'
import { User } from '../../types/graphql'
import { useCreateProfile } from './create-profile'

type Data = Pick<User, 'id' | 'email' | 'name' | 'image'>

type Returns = {
  error?: string
  loading: boolean

  onboard: (data: Data) => void
}

export const useOnboarding = (): Returns => {
  const client = useApolloClient()

  const { createProfile } = useCreateProfile()

  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(false)

  const onboard: Returns['onboard'] = useCallback(
    async (data) => {
      setLoading(true)

      try {
        const image = await supabase.storage
          .from('photos')
          .upload(
            `${data.id}/photo.jpg`,
            Buffer.from(data.image.slice(BASE64_JPG_PREFIX.length), 'base64'),
            {
              contentType: 'image/jpeg',
              upsert: true
            }
          )

        if (image.error) {
          throw new Error(image.error.message)
        }

        const created = await createProfile({
          email: data.email,
          id: data.id,
          image: image.data.Key,
          name: data.name
        })

        if (!created) {
          throw new Error('Something went wrong')
        }

        await client.refetchQueries({
          include: ['profile']
        })
      } catch (error) {
        console.log(error)

        setError(error.message)
      } finally {
        setLoading(false)
      }
    },
    [client, createProfile]
  )

  return {
    error,
    loading,
    onboard
  }
}
