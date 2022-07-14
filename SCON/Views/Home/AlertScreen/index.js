import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useAsync } from 'react-async-hook';
import { ApiFetch } from '../../../Components/API/ApiFetch';

import AlertComponent from './AlertComponent';
import styles from './AlertScreen.styles';

export function AlertScreen({ navigation }) {
  const [data, setData] = useState([])
    useAsync(
      ApiFetch({
        method: 'GET',
        url: 'http://localhost:1337/api/alerts',
        headers: { "Authorization": "token" },
        body: null
      })
        .then((thing => {
          setData(thing)
        }))
    )
  const onClickAll = () => {
    console.log("aaaa", data, "aaa")
  };
  return (
    <SafeAreaView key={`Alert`} style={styles.alertWrapper}>
      <View style={styles.alertTop}>
        <Text style={styles.alertTitle}>쌓여있는 알림을 확인해보세요</Text>
        <TouchableOpacity onPress={() => onClickAll(alert.alert_id)}>
          <Text style={styles.alertDeleteAll}>모두 삭제</Text>
        </TouchableOpacity>
      </View>
      {data ?
        data.map(
          (alert) =>
            alert && <AlertComponent key={`alert-${alert.alarmId}`} alert={alert} />,
        )
        : <View />
      }
    </SafeAreaView>
  );
}
