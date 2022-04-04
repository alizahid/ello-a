import { useCallback, useState } from 'react'

import { supabase } from '../../lib/supabase'

type Returns = {
  error?: string
  loading: boolean
  success: boolean

  signIn: (email: string, password: string) => void
}

export const useSignIn = (): Returns => {
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const signIn: Returns['signIn'] = useCallback(async (email, password) => {
    setLoading(true)

    const { error } = await supabase.auth.signIn({
      email,
      password
    })

    if (error) {
      setError(error.message)
    } else {
      setSuccess(true)
    }

    setLoading(false)
  }, [])

  return {
    error,
    loading,
    signIn,
    success
  }
}
