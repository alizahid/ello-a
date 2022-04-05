import { StackScreenProps } from '@react-navigation/stack'
import { FunctionComponent, useCallback, useRef, useState } from 'react'
import { Keyboard, Pressable, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Button } from '../components/common/button'
import { Input } from '../components/common/input'
import { Logo } from '../components/common/logo'
import { Message } from '../components/common/message'
import { useSignIn } from '../hooks/auth/sign-in'
import { LandingParams } from '../navigators/landing'
import { tw } from '../styles/tailwind'

type Props = StackScreenProps<LandingParams, 'SignIn'>

export const SignIn: FunctionComponent<Props> = ({ navigation }) => {
  const { error, loading, signIn } = useSignIn()

  const emailRef = useRef<TextInput>()
  const passwordRef = useRef<TextInput>()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = useCallback(() => {
    if (!email) {
      return emailRef.current.focus()
    }

    if (!password) {
      return passwordRef.current.focus()
    }

    signIn(email, password)

    Keyboard.dismiss()
  }, [email, password, signIn])

  return (
    <SafeAreaView style={tw`flex-1 p-6`}>
      <View style={tw`items-center justify-center flex-1`}>
        <Logo />
      </View>

      <View>
        {!!error && <Message message={error} style={tw`mb-6`} type="error" />}

        <Input
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChange={setEmail}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Email"
          ref={emailRef}
          returnKeyType="next"
          value={email}
        />

        <Input
          onChange={setPassword}
          onSubmitEditing={submit}
          placeholder="Password"
          ref={passwordRef}
          returnKeyType="go"
          secureTextEntry
          style={tw`mt-3`}
          value={password}
        />

        <Button
          label="Sign in"
          loading={loading}
          onPress={submit}
          style={tw`mt-6`}
        />

        <Pressable
          disabled={loading}
          onPress={() => navigation.navigate('SignUp')}
          style={tw`items-center p-3 mt-3 rounded-lg bg-neutral-100`}>
          <Text style={tw`text-base font-ello-medium text-neutral-600`}>
            New user?
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
