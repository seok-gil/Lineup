import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Time, ApiFetch} from '../../../Components'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {SmileIcon, ChatBubbleIcon} from '../Assets'
import {XIcon} from '../../../Assets/svgs'
import styles from './AlertComponent.styles'

function AlertComponent({alert, setMount, navigation}) {
  
  const goFeed = () => {
    console.log(alert)
    navigation.navigate('FeedScreen', { feedId: `${alert.feedId}` })
  }

  const onClickX = () => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'DELETE',
        url: `/alarm/${alert.id}`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then((thing) => {
        setMount(new Date())
      })
    })
  }
  return (
    <TouchableOpacity onPress={goFeed}
      style={[
        styles.alertComponentWrapper,
        !alert.check ? styles.alertRead : styles.alertNotRead,
      ]}>
      <View style={styles.alertComponentTop}>
        {alert.type === '댓글' ? (
          <ChatBubbleIcon style={styles.alertComponentImage} />
        ) : (
          <SmileIcon style={styles.alertComponentImage} />
        )}
        <Text style={styles.alertTitle}>
          {alert.type === '댓글' ? '댓글 알림' : '선수 대회 알림'}
        </Text>
      </View>
      <View style={styles.alertComponentMiddle}>
        <Text style={styles.alertContent}>{alert.content}</Text>
        <View style={styles.alertComponentBottom}>
          <Text style={styles.alertCreatedAt}>
            (<Time time={alert.date} separator="-" />)
          </Text>
          <TouchableOpacity onPress={() => onClickX()}>
            <XIcon style={styles.alertXIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default AlertComponent
