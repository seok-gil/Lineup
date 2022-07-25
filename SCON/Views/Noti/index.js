import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import NotiElement from './NotiElement';
import { ApiFetchOne } from '../../Components/API/ApiFetch';
import {noti as data} from '../../Assets/Data/Noti.json';

import styles from './Noti.styles';

export function NotiScreen({navigation}) {
  const [data, setData] = useState([]);
  const [lastFeed, setLastFeed] = useState(1)
  const [nextFeed, setNextFeed] = useState(10)
  var temp = data
  async function getApi() {
    for (var i = lastFeed; i < nextFeed; ++i) {
      await ApiFetchOne({
        method: 'GET',
        url: `http://localhost:1337/api/notices/${i}`,
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
  }, [])
  return (
    <View style={styles.notiWrapper}>
      {data.map((item, index) => {
        return <NotiElement key={index} data={item} />;
      })}
    </View>
  );
}
