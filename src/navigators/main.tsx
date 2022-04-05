import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FunctionComponent } from 'react'

import { StackHeader } from '../components/nav/stack/header'
import { TabBar } from '../components/nav/tab/bar'
import { Landing } from '../scenes/auth/landing'
import { PostsNavigator } from './posts'

export type MainParams = {
  Posts: undefined
  CreatePost: undefined
  Profile: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<MainParams>()

export const MainNavigator: FunctionComponent = () => (
  <Navigator
    screenOptions={{
      header: (props) => <StackHeader {...props} />
    }}
    tabBar={(props) => <TabBar {...props} />}>
    <Screen
      component={PostsNavigator}
      name="Posts"
      options={{
        headerShown: false
      }}
    />
    <Screen
      component={Landing}
      name="CreatePost"
      options={{
        title: 'New'
      }}
    />
    <Screen
      component={Landing}
      name="Profile"
      options={{
        title: 'Profile'
      }}
    />
  </Navigator>
)
