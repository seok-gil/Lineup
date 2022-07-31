import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './AlertComponent.styles';
import {SmileIcon, ChatBubbleIcon, XIcon} from '../../../Assets/Icons';
import { ApiFetch } from '../../../Components/API/ApiFetch';
import { Time } from "../../../Components/Time"
function AlertComponent({alert}) {
  if (!alert) return <View />;

  //TODO delete alarmAPI
  const onClickX = ( alarmId ) => {
      ApiFetch({
        method: 'DELETE',
        url: `http://localhost:1337/api/alerts/2`,
        headers: { "Authorization": "token" },
        body: null
      })
  };

  return (
    <View
      style={[
        styles.alertComponentWrapper,
        alert.check ? styles.alertRead : styles.alertNotRead,
      ]}>
      <View style={styles.alertComponentTop}>
        <Image
          source={alert.type === '댓글' ? ChatBubbleIcon : SmileIcon}
          style={styles.alertComponentImage}
        />
        <Text style={styles.alertTitle}>
          {alert.type === '댓글'? '댓글 알림' : '선수 대회 알림'}
        </Text>
      </View>
      <View style={styles.alertComponentMiddle}>
        <Text style={styles.alertContent}>{alert.content}</Text>
        <View style={styles.alertComponentBottom}>
          <Text style={styles.alertCreatedAt}>(<Time  time={alert.date} separator="-"/>)</Text>
          <TouchableOpacity onPress={() => onClickX(alert.alarmId)}>
            <Image source={XIcon} style={styles.alertXIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default AlertComponent;