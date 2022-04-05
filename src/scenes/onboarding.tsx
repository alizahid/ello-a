import { User } from '@supabase/supabase-js'
import { FunctionComponent, useCallback, useRef, useState } from 'react'
import { Keyboard, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Button } from '../components/common/button'
import { Input } from '../components/common/input'
import { Message } from '../components/common/message'
import { PhotoPicker } from '../components/common/photo-picker'
import { useOnboarding } from '../hooks/auth/onboarding'
import { tw } from '../styles/tailwind'

type Props = {
  user: User
}

export const Onboarding: FunctionComponent<Props> = ({ user }) => {
  const { error, loading, onboard } = useOnboarding()

  const nameRef = useRef<TextInput>()

  const [name, setName] = useState('')
  const [image, setImage] = useState<string>()

  const submit = useCallback(() => {
    if (!name) {
      return nameRef.current.focus()
    }

    if (!image) {
      return
    }

    onboard({
      email: user.email,
      id: user.id,
      image,
      name
    })

    Keyboard.dismiss()
  }, [image, name, onboard, user])

  return (
    <SafeAreaView style={tw`items-center justify-center flex-1 p-6`}>
      {!!error && <Message message={error} style={tw`mb-6`} type="error" />}

      <PhotoPicker image={image} onChange={setImage} size={124} />

      <Input
        autoCapitalize="none"
        autoCorrect={false}
        onChange={setName}
        onSubmitEditing={submit}
        placeholder="Name"
        ref={nameRef}
        returnKeyType="next"
        style={tw`w-2/3 mt-6 text-center`}
        value={name}
      />

      <Button
        label="Finish"
        loading={loading}
        onPress={submit}
        style={tw`mt-6`}
      />
    </SafeAreaView>
  )
}
