import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { ApiFetchOne, ApiFetch } from '../../../Components/API/ApiFetch';

import { PlayerFeed } from './PlayerFeed';
import { PlayerFixedFeed } from './PlayerFixedFeeds';

import styles from './PlayerFeeds.styles';
import AsyncStorage from "@react-native-community/async-storage"

function PlayerFeeds({ playerId, feed, navigation }) {
  const [data, setData] = useState();
  const [nextFeed, setNextFeed] = useState(10);
  const [lastFeed, setLastFeed] = useState(1);
  var temp = data;

  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'GET',
          url: `http://15.164.100.211:8080/player-home/${playerId}/feeds?size=${0}&lastFeedId=${0}`,
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
  }, []
  );
  if (!data) return <View />;
  return (
    <View style={styles.playerFeedsWrapper}>
      <PlayerFixedFeed playerId={playerId} navigation={navigation} />
      {data.content.map((v, i) => (
        <PlayerFeed key={`player-feed-${i}`} feed={v} navigation={navigation} />
      ))}
    </View>
  );
}

export default PlayerFeeds;
