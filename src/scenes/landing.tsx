import { StackScreenProps } from '@react-navigation/stack'
import { FunctionComponent } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Button } from '../components/common/button'
import { Logo } from '../components/common/logo'
import { LandingParams } from '../navigators/landing'
import { tw } from '../styles/tailwind'

type Props = StackScreenProps<LandingParams, 'Landing'>

export const Landing: FunctionComponent<Props> = ({ navigation }) => (
  <SafeAreaView style={tw`items-center justify-center flex-1 p-12`}>
    <Logo />

    <Text style={tw`mt-6 text-4xl font-ello-bold`}>Ello</Text>
    <Text style={tw`my-2 text-xl text-center font-ello-regular`}>
      Say hello to the future of social networking
    </Text>

    <Button
      label="Sign in"
      onPress={() => navigation.navigate('SignIn')}
      style={tw`mt-6`}
    />
  </SafeAreaView>
)
