import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Time, ApiFetch} from '../../../Components'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {SmileIcon, ChatBubbleIcon} from '../Assets'
import {XIcon} from '../../../Assets/svgs'
import styles from './AlertComponent.styles'

function AlertComponent({alert, setMount, navigation}) {
  const goFeed = () => {
    navigation.navigate('FeedScreen', { feedId: `${alert.feedId}` })
  }
  const onClickX = () => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'DELETE',
        url: `/alarm/${alert.alarmId}`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then((thing) => {
        console.log(thing)
        setMount(new Date())
      })
    })
  }
  return (
    <View
      style={[
        styles.alertComponentWrapper,
        alert.check ? styles.alertNotRead : styles.alertRead,
      ]}>
      <View style={styles.alertComponentTop}>
        {alert.type === '댓글' ? (
          <ChatBubbleIcon style={styles.alertComponentImage} />
        ) : (
          <SmileIcon style={styles.alertComponentImage} />
        )}
        <Text style={styles.alertTitle}>
          {alert.type === 'COMMENT' ? '댓글 알림' : '선수 대회 알림'}
        </Text>
      </View>
      <TouchableOpacity onPress={goFeed} style={styles.alertComponentMiddle}>
        <Text style={styles.alertContent}>{alert.content}</Text>
        <View style={styles.alertComponentBottom}>
          <Text style={styles.alertCreatedAt}>
            (<Time time={alert.date} separator="-" />)
          </Text>
          <TouchableOpacity onPress={() => onClickX()}>
            <XIcon style={styles.alertXIcon} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AlertComponent
