import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import {
  LogoutIcon,
  MegaphoneIcon,
  QnAIcon,
  ArrowIcon,
  NotiIcon,
} from '../../Assets/svgs'

import styles from './MypageTab.styles'

export function MypageTab({navigation}) {
  return (
    <View style={styles.mypageTabWrapper}>
      <TouchableOpacity
        style={styles.mypageElement}
        onPress={() => navigation.navigate('Noti')}>
        <View style={styles.elementLeft}>
          <MegaphoneIcon width={18} height={18} style={styles.elementIcon} />
          <Text style={styles.elementText}>공지사항</Text>
        </View>
        <ArrowIcon
          width={11}
          height={6}
          fill={'#0E0E0E'}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mypageElement}
        onPress={() => navigation.navigate('SettingAlert')}>
        <View style={styles.elementLeft}>
          <NotiIcon width={18} height={18} style={styles.elementIcon} />
          <Text style={styles.elementText}>알림 설정</Text>
        </View>
        <ArrowIcon
          width={11}
          height={6}
          fill={'#0E0E0E'}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mypageElement}
        onPress={() => navigation.navigate('InquiryTab')}>
        <View style={styles.elementLeft}>
          <QnAIcon width={18} height={18} style={styles.elementIcon} />
          <Text style={styles.elementText}>문의 하기</Text>
        </View>
        <ArrowIcon
          width={11}
          height={6}
          fill={'#0E0E0E'}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mypageElement}
        onPress={() => navigation.navigate('AccountScreen')}>
        <View style={styles.elementLeft}>
          <LogoutIcon width={18} height={18} style={styles.elementIcon} />
          <Text style={styles.elementText}>계정 관리</Text>
        </View>
        <ArrowIcon
          width={11}
          height={6}
          fill={'#0E0E0E'}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
    </View>
  )
}
