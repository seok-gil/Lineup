import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './AlertComponent.styles';

import {SmileIcon, ChatBubbleIcon, XIcon} from '../../../Assets/Icons';

function AlertComponent({alert}) {
  if (!alert) return <View />;

  const onClickX = alert_id => {
    console.log(alert_id);
  };

  return (
    <View
      style={[
        styles.alertComponentWrapper,
        alert.read ? styles.alertRead : styles.alertNotRead,
      ]}>
      <View style={styles.alertComponentTop}>
        <Image
          source={alert.type === '댓글 알림' ? ChatBubbleIcon : SmileIcon}
          style={styles.alertComponentImage}
        />
        <Text style={styles.alertTitle}>
          {alert.read}
          {alert.type}
        </Text>
      </View>
      <View style={styles.alertComponentMiddle}>
        <Text style={styles.alertContent}>{alert.content}</Text>
        <View style={styles.alertComponentBottom}>
          <Text style={styles.alertCreatedAt}>{alert.createdAt}</Text>
          <TouchableOpacity onPress={() => onClickX(alert.alert_id)}>
            <Image source={XIcon} style={styles.alertXIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default AlertComponent;
