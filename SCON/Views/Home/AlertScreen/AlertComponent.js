import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './AlertComponent.styles';
import SmileIcon from '../../../Assets/Images/SmileIcon.png';
import ChatBubbleIcon from '../../../Assets/Images/ChatBubbleIcon.png';
import XIcon from '../../../Assets/Images/XIcon.png';

function AlertComponent({alert}) {
  if (!alert) return <View />;

  const onClickX = alarmId => {
    console.log(alarmId);
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
          {alert.check}
          {alert.type}
        </Text>
      </View>
      <View style={styles.alertComponentMiddle}>
        <Text style={styles.alertContent}>{alert.content}</Text>
        <View style={styles.alertComponentBottom}>
          <Text style={styles.alertCreatedAt}>{alert.createdAt}</Text>
          <TouchableOpacity onPress={() => onClickX(alert.alarmId)}>
            <Image source={XIcon} style={styles.alertXIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default AlertComponent;
