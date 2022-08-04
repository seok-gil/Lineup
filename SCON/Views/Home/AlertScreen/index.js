import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { ApiFetchOne, ApiFetch } from '../../../Components/API/ApiFetch';

import AlertComponent from './AlertComponent';
import styles from './AlertScreen.styles';

import AsyncStorage from "@react-native-community/async-storage"




export function AlertScreen( ) {
  const [data, setData] = useState([])
  const [nextFeed, setNextFeed] = useState(10)
  const [lastFeed, setLastFeed] = useState(1)
  var temp = data;

  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'GET',
          url: 'http://15.164.100.211:8080/alarm',
          headers: { 
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + thing,
          },
          body: null,
        }).then(thing => {
          console.log("@@@@@@@@@@@",thing)
          // setData(thing);
        })
  })
  }, []);

  async function getApi() {
    for (var i = lastFeed; i < nextFeed; ++i) {
      await ApiFetchOne({
        method: 'GET',
        url: `http://localhost:1337/api/alerts/${i}`,
        headers: { "Authorization": "token" },
        body: null
      })
        .then((thing => {
          temp.push(thing)
        }))
    }
  }
  useEffect(() => {
    getApi().then(() => {
      setLastFeed(nextFeed)
      setData(temp)
    })
  }, [nextFeed])

  const onClickAll = () => {
    console.log("aaaa", data, "aaa")
  };

  const view = []
  const alertList = () => {
    for (let i = 0; i < data.length; ++i) {
      view.push(
        <AlertComponent
          key={`alert-${i}`}
          alert={data[i]}
        />
      );
    }
    return view
  }
  if (!data) return (<SafeAreaView />)
  return (
    <SafeAreaView key={`Alert`} style={styles.alertWrapper}>
      <View style={styles.alertTop}>
        <Text style={styles.alertTitle}>쌓여있는 알림을 확인해보세요</Text>
        <TouchableOpacity onPress={() => onClickAll(alert.alert_id)}>
          <Text style={styles.alertDeleteAll}>모두 삭제</Text>
        </TouchableOpacity>
      </View>
      {alertList()}
    </SafeAreaView>
  );

}