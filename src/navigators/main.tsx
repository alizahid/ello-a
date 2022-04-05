import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FunctionComponent } from 'react'

import { Landing } from '../scenes/landing'

export type MainParams = {
  Posts: undefined
  CreatePost: undefined
  Profile: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<MainParams>()

export const MainNavigator: FunctionComponent = () => (
  <Navigator>
    <Screen component={Landing} name="Posts" />
    <Screen component={Landing} name="CreatePost" />
    <Screen component={Landing} name="Profile" />
  </Navigator>
)
