import { useCallback, useState } from 'react'

import { supabase } from '../../lib/supabase'

type Returns = {
  error?: string
  loading: boolean
  success: boolean

  signUp: (email: string, password: string) => void
}

export const useSignUp = (): Returns => {
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const signUp: Returns['signUp'] = useCallback(async (email, password) => {
    setLoading(true)

    const { error } = await supabase.auth.signUp({
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
    signUp,
    success
  }
}
