import { createStackNavigator } from '@react-navigation/stack'
import { FunctionComponent } from 'react'
import { useSafeAreaFrame } from 'react-native-safe-area-context'

import { StackHeader } from '../components/nav/stack/header'
import { Landing } from '../scenes/auth/landing'
import { SignIn } from '../scenes/auth/sign-in'
import { SignUp } from '../scenes/auth/sign-up'

export type AuthParams = {
  Landing: undefined
  SignIn: undefined
  SignUp: undefined
}

const { Navigator, Screen } = createStackNavigator<AuthParams>()

export const AuthNavigator: FunctionComponent = () => {
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
