import { useCallback, useState } from 'react'

import { supabase } from '../../lib/supabase'

type Returns = {
  error?: string
  loading: boolean

  signIn: (email: string, password: string) => void
}

export const useSignIn = (): Returns => {
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(false)

  const signIn: Returns['signIn'] = useCallback(async (email, password) => {
    setLoading(true)

    const { error } = await supabase.auth.signIn({
      email,
      password
    })

    if (error) {
      setError(error.message)
    }

    setLoading(false)
  }, [])

  return {
    error,
    loading,
    signIn
  }
}
