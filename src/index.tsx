import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject
} from '@apollo/client'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { FunctionComponent, useEffect, useRef } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { App } from './app'
import { Loading } from './components/common/loading'
import { useAuth } from './hooks/auth'
import { createClient } from './lib/apollo'
import { FONTS } from './lib/config'
import { tw } from './styles/tailwind'
import { theme } from './styles/theme'

export const Ello: FunctionComponent = () => {
  const client = useRef<ApolloClient<NormalizedCacheObject>>()

  const [loaded] = useFonts(FONTS)

  const { session } = useAuth()

  useEffect(() => {
    client.current = createClient(session.access_token)
  }, [session.access_token])

  if (!loaded) {
    return <Loading />
  }

  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`flex-1`}>
        <StatusBar />

        <ApolloProvider client={client.current}>
          <NavigationContainer theme={theme}>
            <App session={session} />
          </NavigationContainer>
        </ApolloProvider>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  )
}
