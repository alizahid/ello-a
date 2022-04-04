import { forwardRef } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { tw } from '../../styles/tailwind'

type Props = Pick<
  TextInputProps,
  | 'autoCapitalize'
  | 'autoComplete'
  | 'autoCorrect'
  | 'keyboardType'
  | 'onSubmitEditing'
  | 'placeholder'
  | 'returnKeyType'
  | 'secureTextEntry'
  | 'style'
  | 'value'
> & {
  onChange: (value: string) => void
}

export const Input = forwardRef<TextInput, Props>(
  ({ onChange, style, ...props }, ref) => (
    <TextInput
      {...props}
      onChangeText={onChange}
      placeholderTextColor={tw.color('neutral-400')}
      ref={ref}
      style={[
        tw`p-3 text-base leading-tight rounded-lg bg-neutral-200 font-ello-regular`,
        style
      ]}
    />
  )
)
