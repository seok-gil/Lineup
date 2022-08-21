import React from 'react'

import {View, Text, Image} from 'react-native'

export function Head({data}) {
  if (!data) return <View />
  return (
    <View style={{flex: 100}}>
      <Image
        source={{uri: data.backPic}}
        style={{flex: 1, width: '20%', height: '10%'}}
      />
      <Image
        source={{uri: data.profilePic}}
        style={{flex: 1, width: '20%', height: '10%'}}
      />
      <Text>{data.nickname}</Text>
    </View>
  )
}
