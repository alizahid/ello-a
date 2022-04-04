import { User } from '@prisma/client'
import { useCallback, useEffect, useState } from 'react'

import { supabase } from '../../lib/supabase'

type Returns = {
  loading: boolean
  profile?: User

  refetch: () => void
}

export const useProfile = (): Returns => {
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState<User>()

  const fetch = useCallback(async () => {
    const user = supabase.auth.user()

    const { data } = await supabase
      .from('User')
      .select('*')
      .eq('id', user.id)
      .single()

    if (data) {
      setProfile(data)
    }

    setLoading(false)
  }, [])

  useEffect(() => {
    fetch()
  }, [fetch])

  return {
    loading,
    profile,
    refetch: fetch
  }
}
