import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { ApiFetch } from '../../Components/API/ApiFetch';

import RecordHead from './RecordHead';
import PlayerCard from './PlayerCard';

import styles from './RecordScreen.styles';
import AsyncStorage from "@react-native-community/async-storage"

export function RecordScreen({ route }) {
  const [data, setData] = useState([])
  const [lastFeed, setLastFeed] = useState(1)
  const [nextFeed, setNextFeed] = useState(10)
  var temp = data;
  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'GET',
          url: `/player-home/${route.params.playerId}/records`,
          headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + thing,
          },
          body: null,
        }).then(thing => {
          console.log("thing", thing)
          setData(thing);
        })
      })
  }, []);

  if (!data) return (<SafeAreaView/>)
  return (
    <SafeAreaView style={styles.recordScreenWrapper}>
      <ScrollView>
        {/* <RecordHead medal={data.Medal} /> */}
        <View>
          {data.map(record => (
            <PlayerCard key={`player-card-${record.recordId}`} record={record} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
