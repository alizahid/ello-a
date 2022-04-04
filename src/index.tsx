import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import React, { FunctionComponent, useEffect } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { useAuth } from './hooks/auth'
import { useProfile } from './hooks/auth/profile'
import { FONTS } from './lib/config'
import { LandingNavigator } from './navigators/landing'
import { tw } from './styles/tailwind'
import { theme } from './styles/theme'

export const Ello: FunctionComponent = () => {
  const [loaded] = useFonts(FONTS)

  const { loading, user } = useAuth()
  const { loading: fetching, profile, refetch } = useProfile()

  useEffect(() => {
    if (user) {
      refetch()
    }
  }, [user, refetch])

  if (!loaded || loading || fetching) {
    return null
  }

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`flex-1`}>
        <StatusBar />

        <NavigationContainer theme={theme}>
          {profile ? null : user ? null : <LandingNavigator />}
        </NavigationContainer>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  )
}
