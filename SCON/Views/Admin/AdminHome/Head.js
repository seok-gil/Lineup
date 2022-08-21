import React from 'react'
import {View, Text} from 'react-native'

import {LineupLogo, DefaultProfileImage} from '../../../Assets/svgs'
import styles from './Head.styles'

export function Head({data}) {
  if (!data) return <View />
  return (
    <View>
      <View style={styles.headerWrapper}>
        <View style={styles.alignment}>
          <LineupLogo width={100} height={30} style={styles.logo} />
        </View>
      </View>
      <View style={styles.viewWrapper}>
        <DefaultProfileImage width={64} height={64} style={styles.image} />
        <View style={styles.viewProfileInfo}>
          <Text style={styles.nameText} numberOfLines={1} ellipsizeMode="tail">
            관리자
          </Text>
          <Text style={styles.emailText} numberOfLines={1} ellipsizeMode="tail">
            {data.adminEmail}
          </Text>
        </View>
      </View>
    </View>
  )
}
