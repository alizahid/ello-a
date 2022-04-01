import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import React, { FunctionComponent } from 'react'
import { KeyboardAvoidingView, Platform, Text, View } from 'react-native'

import { FONTS } from './lib/config'
import { tw } from './styles'

export const Ello: FunctionComponent = () => {
  const [loaded] = useFonts(FONTS)

  if (!loaded) {
    return null
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={tw`flex-1`}>
      <StatusBar />

      <View style={tw`items-center justify-center flex-1`}>
        <Text style={tw`text-2xl font-ello-bold`}>Ello</Text>
        <Text style={tw`mt-3 text-xl font-ello-medium`}>Ello</Text>
        <Text style={tw`mt-3 text-base font-ello-regular`}>Ello</Text>
      </View>
    </KeyboardAvoidingView>
  )
}
