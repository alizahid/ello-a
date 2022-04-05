import { Session } from '@supabase/supabase-js'
import { FunctionComponent, useEffect } from 'react'

import { Loading } from './components/common/loading'
import { useProfile } from './hooks/auth/profile'
import { AuthNavigator } from './navigators/auth'
import { MainNavigator } from './navigators/main'
import { Onboarding } from './scenes/onboarding'

type Props = {
  session?: Session
}

export const App: FunctionComponent<Props> = ({ session }) => {
  const { loading, profile, refetch } = useProfile()

  useEffect(() => {
    if (session) {
      refetch()
    }
  }, [session, refetch])

  if (loading) {
    return <Loading />
  }

  if (profile) {
    return <MainNavigator />
  }

  if (session?.user) {
    return <Onboarding user={session.user} />
  }

  return <AuthNavigator />
}
