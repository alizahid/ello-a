import { FunctionComponent } from 'react'
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleProp,
  ViewStyle
} from 'react-native'

import { tw } from '../../styles/tailwind'

type Props = {
  color?: string
  size?: ActivityIndicatorProps['size']
  style?: StyleProp<ViewStyle>
}

export const Spinner: FunctionComponent<Props> = ({
  color = tw.color('primary-600'),
  size = 'small',
  style
}) => <ActivityIndicator color={color} size={size} style={style} />
