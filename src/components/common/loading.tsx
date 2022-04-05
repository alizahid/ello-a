import { FunctionComponent } from 'react'
import { View } from 'react-native'

import { tw } from '../../styles/tailwind'
import { Logo } from './logo'
import { Spinner } from './spinner'

export const Loading: FunctionComponent = () => (
  <View style={tw`items-center justify-center flex-1`}>
    <Logo />

    <Spinner size="large" style={tw`mt-6`} />
  </View>
)
