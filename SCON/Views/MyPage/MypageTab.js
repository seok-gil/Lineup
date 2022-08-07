import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

import {
  QnAIcon,
  NotiIcon,
  MegaphoneIcon,
  LogoutIcon,
  DownIcon,
} from '../../Assets/Icons'

import styles from './MypageTab.styles'

export function MypageTab({navigation}) {
  return (
    <View style={styles.mypageTabWrapper}>
      <TouchableOpacity
        style={styles.mypageElement}
        onPress={() => navigation.navigate('Noti')}>
        <View style={styles.elementLeft}>
          <Image source={MegaphoneIcon} style={styles.elementIcon} />
          <Text style={styles.elementText}>공지사항</Text>
        </View>
        <Image source={DownIcon} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mypageElement}
        onPress={() => navigation.navigate('SettingAlert')}>
        <View style={styles.elementLeft}>
          <Image source={NotiIcon} style={styles.elementIcon} />
          <Text style={styles.elementText}>알림 설정</Text>
        </View>
        <Image source={DownIcon} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mypageElement}
        onPress={() => navigation.navigate('InquiryTab')}>
        <View style={styles.elementLeft}>
          <Image source={QnAIcon} style={styles.elementIcon} />
          <Text style={styles.elementText}>문의 하기</Text>
        </View>
        <Image source={DownIcon} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mypageElement}
        onPress={() => navigation.navigate('AccountScreen')}>
        <View style={styles.elementLeft}>
          <Image source={LogoutIcon} style={styles.elementIcon} />
          <Text style={styles.elementText}>계정 관리</Text>
        </View>
        <Image source={DownIcon} style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  )
}
