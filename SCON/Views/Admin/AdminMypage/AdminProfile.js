import React from 'react'
import {View, Image, Text} from 'react-native'

import {DefaultProfileImage} from '../../../Assets/svgs'

import styles from './AdminProfile.styles'
export function AdminProfile({data, navigation}) {
  if (!data) return <View />
  return (
    <View style={styles.profileWrapper}>
      <DefaultProfileImage
        width={100}
        height={100}
        style={styles.profileImage}
      />
      <Text style={styles.nickname}>관리자</Text>
      <Text style={styles.email}>{data.email} </Text>
    </View>
  )
}
