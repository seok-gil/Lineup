import React from 'react'
import {View, TouchableOpacity} from 'react-native'

import {NickName} from './index'

import {LineupLogo, NotiIcon} from '../../Assets/svgs'

import styles from './Head.styles'

function AlertIcon({alert, navigation}) {
  return (
    <View style={[styles.alignment, styles.alertWrapper]}>
      <TouchableOpacity onPress={() => navigation.navigate('AlertScreen')}>
        <View style={styles.alertIconWrapper}>
          <NotiIcon />
          {alert ? <View style={styles.alertBadge} /> : <></>}
        </View>
      </TouchableOpacity>
    </View>
  )
}

export function Head({data, navigation}) {
  if (!data) return <View />
  return (
    <View>
      <View style={styles.headerWrapper}>
        <View style={styles.alignment} />
        <View style={[styles.alignment, styles.imageWrapper]}>
          <LineupLogo width={100} height={30} style={styles.image} />
        </View>
        <AlertIcon
          key={'Alert'}
          alert={data.existAlarm}
          navigation={navigation}
        />
      </View>
      <NickName user={data} />
    </View>
  )
}
