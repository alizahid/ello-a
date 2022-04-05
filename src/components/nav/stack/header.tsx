import { StackHeaderProps } from '@react-navigation/stack'
import { FunctionComponent } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { tw } from '../../../styles/tailwind'
import { Icon } from '../../common/icon'

export const StackHeader: FunctionComponent<StackHeaderProps> = ({
  back,
  navigation,
  options,
  route
}) => {
  const { top } = useSafeAreaInsets()

  return (
    <View
      style={[
        tw`items-center justify-center`,
        {
          height: 48 + top,
          paddingTop: top
        }
      ]}>
      {back && (
        <Pressable
          onPress={navigation.goBack}
          style={({ pressed }) => [
            tw.style('absolute bottom-0 left-0 p-3', pressed && 'opacity-75')
          ]}>
          <Icon name="left" />
        </Pressable>
      )}

      <Text style={tw`text-lg text-center font-ello-bold`}>
        {options.title ?? route.name}
      </Text>
    </View>
  )
}
