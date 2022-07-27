import React, { useEffect, useState } from 'react';
import {SafeAreaView} from 'react-native';

import CompetitionElement from './CompetitionElement';
import { ApiFetchOne } from '../../../Components/API/ApiFetch';
import styles from './CompetitionResult.styles';

export function CompetitionResult({navigation}) {
  const [data, setData] = useState([]);
  const [lastFeed, setLastFeed] = useState(1)
  const [nextFeed, setNextFeed] = useState(10)
  var temp = data;
  
  async function getApi() {
    for (var i = lastFeed; i < nextFeed; ++i) {
      await ApiFetchOne({
        method: 'GET',
        url: `http://localhost:1337/api/events/${i}`,
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
