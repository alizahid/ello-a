import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

import { supabase } from '../../lib/supabase'

type Returns = {
  loading: boolean
  user?: User
}

export const useAuth = (): Returns => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session.user)

      setLoading(false)
    })

    return () => {
      data?.unsubscribe()
    }
  }, [])

  return {
    loading,
    user
  }
}
