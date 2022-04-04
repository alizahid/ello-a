import { FunctionComponent } from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'

import { tw } from '../../styles/tailwind'
import { Icon } from './icon'

type Props = {
  message: string
  style?: StyleProp<ViewStyle>
  type?: 'message' | 'success' | 'error'
}

export const Message: FunctionComponent<Props> = ({
  message,
  style,
  type = 'message'
}) => (
  <View
    style={[
      tw.style(
        'flex-row items-center rounded-xl p-3',
        type === 'error'
          ? 'bg-rose-200'
          : type === 'success'
          ? 'bg-emerald-200'
          : 'bg-blue-200'
      ),
      style
    ]}>
    <Icon name={type} />

    <Text style={tw`flex-1 ml-3 text-base text-black font-ello-regular`}>
      {message}
    </Text>
  </View>
)
