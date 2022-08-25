import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import {AcceptIcon, ListIcon} from '../Assets'
import {AlertTriangleIcon} from '../../../Assets/svgs'
import {QnAIcon, MegaphoneIcon, ArrowIcon} from '../../../Assets/svgs'

import styles from './AdminMypageTab.styles'

export function AdminMypageTab({navigation}) {
  return (
    <View style={styles.mypageTabWrapper}>
      <TouchableOpacity
        style={styles.mypageElement}
        onPress={() => navigation.navigate('RegistMemberTab')}>
        <View style={styles.elementLeft}>
          <ListIcon width={18} height={18} style={styles.elementIcon} />
          <Text style={styles.elementText}>가입자목록</Text>
        </View>
        <ArrowIcon
          width={11}
          height={6}
          fill="#0E0E0E"
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mypageElement}
        onPress={() => navigation.navigate('AdminNotiTab')}>
        <View style={styles.elementLeft}>
          <MegaphoneIcon width={18} height={18} style={styles.elementIcon} />
          <Text style={styles.elementText}>공지사항</Text>
        </View>
        <ArrowIcon
          width={11}
          height={6}
          fill="#0E0E0E"
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mypageElement}
        onPress={() => navigation.navigate('Report')}>
        <View style={styles.elementLeft}>
          <AlertTriangleIcon
            width={18}
            height={18}
            fill="#0E0E0E"
            style={styles.elementIcon}
          />
          <Text style={styles.elementText}>신고 접수</Text>
        </View>
        <ArrowIcon
          width={11}
          height={6}
          fill="#0E0E0E"
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mypageElement}
        onPress={() => navigation.navigate('RegistTab')}>
        <View style={styles.elementLeft}>
          <AcceptIcon style={styles.elementIcon} />
          <Text style={styles.elementText}>선수 인증 승인</Text>
        </View>
        <ArrowIcon
          width={11}
          height={6}
          fill="#0E0E0E"
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.mypageElement}
        onPress={() => navigation.navigate('Inquiry')}>
        <View style={styles.elementLeft}>
          <QnAIcon width={18} height={18} style={styles.elementIcon} />
          <Text style={styles.elementText}>문의 내역</Text>
        </View>
        <ArrowIcon
          width={11}
          height={6}
          fill="#0E0E0E"
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
    </View>
  )
}
