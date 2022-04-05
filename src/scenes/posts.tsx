import { StackScreenProps } from '@react-navigation/stack'
import { FunctionComponent } from 'react'
import { FlatList, Pressable } from 'react-native'

import { PostCard } from '../components/posts/card'
import { useProfile } from '../hooks/auth/profile'
import { usePosts } from '../hooks/posts'
import { PostsParams } from '../navigators/posts'
import { tw } from '../styles/tailwind'

type Props = StackScreenProps<PostsParams, 'List'>

export const PostsList: FunctionComponent<Props> = ({ navigation }) => {
  const { posts } = usePosts()
  const { profile } = useProfile()

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <Pressable
          onPress={() =>
            navigation.navigate('Post', {
              id: item.id
            })
          }>
          <PostCard item={item} profile={profile} style={tw`p-3`} />
        </Pressable>
      )}
    />
  )
}
