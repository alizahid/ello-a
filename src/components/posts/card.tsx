import { FunctionComponent } from 'react'
import {
  Image,
  Pressable,
  StyleProp,
  Text,
  View,
  ViewStyle
} from 'react-native'

import { SUPABASE_URL } from '../../lib/config'
import { tw } from '../../styles/tailwind'
import { Post, User } from '../../types/graphql'
import { Icon } from '../common/icon'

type Props = {
  item: Post
  profile?: User
  style?: StyleProp<ViewStyle>
}

export const PostCard: FunctionComponent<Props> = ({
  item,
  profile,
  style
}) => {
  const liked = !!item.likeCollection.edges.find(
    ({ node }) => node.userId === profile.id
  )

  const commented = !!item.commentCollection.edges.find(
    ({ node }) => node.userId === profile.id
  )

  return (
    <View style={[tw`flex-row items-center`, style]}>
      <Image
        source={{
          uri: `${SUPABASE_URL}/storage/v1/object/public/${item.user.image}`
        }}
        style={tw`w-12 h-12 rounded-full bg-primary-200`}
      />

      <View style={tw`flex-1 ml-3`}>
        <Text style={tw`text-base text-black font-ello-regular`}>
          {item.body}
        </Text>

        <View style={tw`flex-row mt-2`}>
          <Pressable hitSlop={6} style={tw`flex-row items-center`}>
            <Icon
              color={tw.color(liked ? 'primary-600' : 'neutral-400')}
              name="likes"
              size={20}
            />

            <Text
              style={tw`ml-2 text-sm text-black font-ello-regular tabular-nums`}>
              {item.likeCollection.edges.length}
            </Text>
          </Pressable>

          <Pressable hitSlop={6} style={tw`flex-row items-center ml-6`}>
            <Icon
              color={tw.color(commented ? 'primary-600' : 'neutral-400')}
              name="comments"
              size={20}
            />

            <Text
              style={tw`ml-2 text-sm text-black font-ello-regular tabular-nums`}>
              {item.commentCollection.edges.length}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
