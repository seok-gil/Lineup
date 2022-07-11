import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import { ApiFetch } from '../../../Components/API/ApiFetch';

import AlertComponent from './AlertComponent';

import styles from './AlertScreen.styles';

export function AlertScreen({navigation}) {
  //dummy
  const Data = require('../../../Assets/Data/Alert/Alert.json').data;

    let res = ApiFetch({method: 'GET', url : 'https://httpbin.org/get', headers : {"Authorization": "token"}, body : null})
    console.log ("[")
    console.log (res.json)
    console.log ("]")


  const onClickAll = () => {
    console.log('all');
  };
  return (
    <SafeAreaView key={`Alert`} style={styles.alertWrapper}>
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
    </SafeAreaView>
  );
}
