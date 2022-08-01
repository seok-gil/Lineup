import React, { useEffect, useState } from 'react';
import {SafeAreaView} from 'react-native';

import CompetitionElement from './CompetitionElement';
import { ApiFetchOne, ApiFetch } from '../../../Components/API/ApiFetch';
import styles from './CompetitionResult.styles';
import AsyncStorage from "@react-native-community/async-storage"

export function CompetitionResult({navigation}) {
  const [data, setData] = useState([]);
  const [lastFeed, setLastFeed] = useState(1)
  const [nextFeed, setNextFeed] = useState(10)
  var temp = data;
  
  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'GET',
          url: `http://15.164.100.211:8080/player/event/record`,
          headers: { 
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + thing,
          },
          body: null,
        }).then(thing => {
          setData(thing);
        })
  })
  }, []);

  if (!data) return <SafeAreaView/>
  return (
    <SafeAreaView style={styles.competitionResultWrapper}>
      {data.map((item, index) => {
        return (
          <CompetitionElement data={item} key={index} navigation={navigation} />
        );
      })}
    </SafeAreaView>
  );
}
