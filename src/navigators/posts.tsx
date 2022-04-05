import { createStackNavigator } from '@react-navigation/stack'
import { FunctionComponent } from 'react'
import { useSafeAreaFrame } from 'react-native-safe-area-context'

import { StackHeader } from '../components/nav/stack/header'
import { Landing } from '../scenes/landing'
import { PostsList } from '../scenes/posts'

export type PostsParams = {
  List: undefined
  Post: {
    id: number
  }
}

const { Navigator, Screen } = createStackNavigator<PostsParams>()

export const PostsNavigator: FunctionComponent = () => {
  const { width } = useSafeAreaFrame()

  return (
    <Navigator
      screenOptions={{
        gestureResponseDistance: width,
        header: StackHeader
      }}>
      <Screen
        component={PostsList}
        name="List"
        options={{
          title: 'Posts'
        }}
      />
      <Screen
        component={Landing}
        name="Post"
        options={{
          title: 'Post'
        }}
      />
    </Navigator>
  )
}
