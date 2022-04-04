import { FunctionComponent } from 'react'
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native'

import { tw } from '../../styles/tailwind'
import { Spinner } from './spinner'

type Props = {
  disabled?: boolean
  label: string
  loading?: boolean
  style?: StyleProp<ViewStyle>

  onPress: () => void
}

export const Button: FunctionComponent<Props> = ({
  disabled,
  label,
  loading,
  onPress,
  style
}) => (
  <Pressable
    disabled={disabled ?? loading}
    onPress={onPress}
    style={({ pressed }) => [
      tw.style(
        'flex-row justify-center px-6 py-3 rounded-lg bg-primary-600',
        pressed && 'opacity-75'
      ),
      style
    ]}>
    <Text style={tw`text-base text-white font-ello-medium`}>{label}</Text>

    {loading && <Spinner color={tw.color('white')} style={tw`ml-3`} />}
  </Pressable>
)
