import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { ApiFetchOne } from '../../Components/API/ApiFetch';

import RecordHead from './RecordHead';
import PlayerCard from './PlayerCard';

import Data from '../../Assets/Data/Record.json';
import styles from './RecordScreen.styles';
import { CommentOne } from "./CommentOne"

export function RecordScreen() {
  const [data, setData] = useState([])
  const [lastFeed, setLastFeed] = useState(1)
  const [nextFeed, setNextFeed] = useState(10)
  var temp = data;

  async function getApi() {
    for (var i = lastFeed; i < nextFeed; ++i) {
      await ApiFetchOne({
        method: 'GET',
        url: `http://localhost:1337/api/records/${i}`,
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
  return (
    <SafeAreaView style={styles.recordScreenWrapper}>
      <ScrollView>
        <RecordHead medal={Data.Medal} />

                <View>
          {data.map(record => (
            <PlayerCard key={`player-card-${record.recordId}`} record={record} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
