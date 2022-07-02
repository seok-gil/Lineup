import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import AlertComponent from './AlertComponent';

import styles from './AlertScreen.styles';

export function AlertScreen({navigation}) {
  const Data = require('../../../Assets/Data/Alert.json').alert;

  const onClickAll = () => {
    console.log('all');
  };
  return (
    <View key={`Alert`} style={styles.alertWrapper}>
      <View style={styles.alertTop}>
        <Text style={styles.alertTitle}>쌓여있는 알림을 확인해보세요</Text>
        <TouchableOpacity onPress={() => onClickAll(alert.alert_id)}>
          <Text style={styles.alertDeleteAll}>모두 삭제</Text>
        </TouchableOpacity>
      </View>
      {Data.map(
        (alert, index) =>
          alert && <AlertComponent key={`alert-${index}`} alert={alert} />,
      )}
    </View>
  );
}
