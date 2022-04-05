import * as ImageManipulator from 'expo-image-manipulator'
import * as ImagePicker from 'expo-image-picker'
import { FunctionComponent, useCallback } from 'react'
import { Image, Pressable, StyleProp, ViewStyle } from 'react-native'

import { BASE64_JPG_PREFIX } from '../../lib/config'
import { tw } from '../../styles/tailwind'
import { Icon } from './icon'

type Props = {
  image?: string
  style?: StyleProp<ViewStyle>
  size?: number

  onChange: (image: string) => void
}

export const PhotoPicker: FunctionComponent<Props> = ({
  image,
  onChange,
  size = 100,
  style
}) => {
  const pickPhoto = useCallback(async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1
    })

    if ('uri' in result) {
      const { base64 } = await ImageManipulator.manipulateAsync(
        result.uri,
        [
          {
            resize: {
              height: 800,
              width: 800
            }
          }
        ],
        {
          base64: true,
          compress: 0.8,
          format: ImageManipulator.SaveFormat.JPEG
        }
      )

      onChange(`${BASE64_JPG_PREFIX}${base64}`)
    }
  }, [onChange])

  return (
    <Pressable
      onPress={pickPhoto}
      style={[
        tw`items-center justify-center overflow-hidden rounded-full bg-neutral-100`,
        style,
        {
          height: size,
          width: size
        }
      ]}>
      {image ? (
        <Image
          source={{
            uri: image
          }}
          style={tw`w-full h-full`}
        />
      ) : (
        <Icon name="camera" />
      )}
    </Pressable>
  )
}
