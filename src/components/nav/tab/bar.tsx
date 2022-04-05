import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { FunctionComponent } from 'react'
import { Pressable, View } from 'react-native'

import { tw } from '../../../styles/tailwind'
import { Icon, IconName } from '../../common/icon'

const icons: Record<string, IconName> = {
  CreatePost: 'create',
  Posts: 'feed',
  Profile: 'profile'
}

export const TabBar: FunctionComponent<BottomTabBarProps> = ({
  insets,
  navigation,
  state
}) => (
  <View style={tw`flex-row`}>
    {state.routes.map((route, index) => {
      const active = state.index === index

      return (
        <Pressable
          key={route.key}
          onPress={() => navigation.navigate(route.name)}
          style={({ pressed }) => [
            tw.style('items-center flex-1 p-3', pressed && 'opacity-75'),
            {
              paddingBottom: insets.bottom + 12
            }
          ]}>
          <Icon
            color={tw.color(active ? 'primary-600' : 'neutral-400')}
            name={icons[route.name]}
          />
        </Pressable>
      )
    })}
  </View>
)
