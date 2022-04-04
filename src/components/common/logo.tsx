import { FunctionComponent } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import Svg, { G, Path } from 'react-native-svg'

import { tw } from '../../styles/tailwind'

type Props = {
  size?: number
  style?: StyleProp<ViewStyle>
}

export const Logo: FunctionComponent<Props> = ({ size = 100, style }) => (
  <Svg height={size} style={style} viewBox="0 0 100 100" width={size}>
    <G fill="none" fillRule="nonzero">
      <G fill={tw.color('primary-400')}>
        <Path d="m14.645 14.645c4.8825-4.8825 12.795-4.8825 17.6775 0l53.0325 53.0325c4.8825 4.8825 4.8825 12.795 0 17.6775-4.8825 4.8825-12.795 4.8825-17.6775 0l-53.0325-53.0325c-4.8825-4.8825-4.8825-12.7975 0-17.6775z" />
        <Path d="m50 100c-6.9025 0-12.5-5.5975-12.5-12.5v-75c0-6.9025 5.5975-12.5 12.5-12.5 6.9025 0 12.5 5.5975 12.5 12.5v75c0 6.9025-5.5975 12.5-12.5 12.5z" />
        <Path d="m0 50c0-6.9025 5.5975-12.5 12.5-12.5h75c6.9025 0 12.5 5.5975 12.5 12.5 0 6.9025-5.5975 12.5-12.5 12.5h-75c-6.9025 0-12.5-5.5975-12.5-12.5z" />
        <Path d="m14.645 85.355c-4.8825-4.8825-4.8825-12.795 0-17.6775l53.0325-53.0325c4.8825-4.8825 12.795-4.8825 17.6775 0 4.8825 4.8825 4.8825 12.795 0 17.6775l-53.0325 53.0325c-4.8825 4.8825-12.7975 4.8825-17.6775 0z" />
      </G>

      <Path
        d="m37.5 55.1775 25 25v-35.355l-25-25z"
        fill={tw.color('primary-700')}
      />
      <Path
        d="m19.8225 62.5h35.355l25-25h-35.355z"
        fill={tw.color('primary-700')}
      />
      <Path
        d="m37.5 80.1775 25-25v-35.355l-25 25z"
        fill={tw.color('primary-700')}
      />
      <Path
        d="m55.1775 37.5h-35.355l25 25h35.355z"
        fill={tw.color('primary-700')}
      />
      <Path
        d="m42.93 57.07c3.905 3.905 10.2375 3.905 14.1425 0 3.905-3.905 3.905-10.2375 0-14.1425-3.905-3.905-10.2375-3.905-14.1425 0-3.9075 3.9075-3.9075 10.2375 0 14.1425z"
        fill={tw.color('primary-300')}
      />
    </G>
  </Svg>
)
