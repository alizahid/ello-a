import { createStackNavigator } from '@react-navigation/stack'
import { FunctionComponent } from 'react'
import { useSafeAreaFrame } from 'react-native-safe-area-context'

import { StackHeader } from '../components/nav/header'
import { Landing } from '../scenes/landing'
import { SignIn } from '../scenes/sign-in'
import { SignUp } from '../scenes/sign-up'

export type LandingParams = {
  Landing: undefined
  SignIn: undefined
  SignUp: undefined
}

const { Navigator, Screen } = createStackNavigator<LandingParams>()

export const LandingNavigator: FunctionComponent = () => {
  const { width } = useSafeAreaFrame()

  return (
    <Navigator
      screenOptions={{
        gestureResponseDistance: width,
        header: StackHeader
      }}>
      <Screen
        component={Landing}
        name="Landing"
        options={{
          headerShown: false
        }}
      />
      <Screen
        component={SignIn}
        name="SignIn"
        options={{
          title: 'Sign in'
        }}
      />
      <Screen
        component={SignUp}
        name="SignUp"
        options={{
          title: 'Sign up'
        }}
      />
    </Navigator>
  )
}
