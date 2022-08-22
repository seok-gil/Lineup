import React from 'react'

import {View, Text, Image} from 'react-native'

import styles from './Head.styles'

export function Head({data}) {
  if (!data) return <View />
  return (
    <View style={styles.headWrapper}>
      <Image source={{uri: data.backPic}} style={styles.background} />
      <View style={styles.profileWrapper}>
        <Image source={{uri: data.profilePic}} style={styles.profile} />
        <Text style={styles.text}>{data.nickname}</Text>
      </View>
    </View>
  )
}
