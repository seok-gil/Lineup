import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { ApiFetchOne, ApiFetch } from '../../../Components/API/ApiFetch';

import { PlayerFeed } from './PlayerFeed';
import { PlayerFixedFeed } from './PlayerFixedFeeds';

import styles from './PlayerFeeds.styles';
import AsyncStorage from "@react-native-community/async-storage"

function PlayerFeeds({ playerId, navigation }) {
  const [data, setData] = useState();

  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'GET',
          url: `/player-home/${playerId}/feeds?size=${3}&lastFeedId=${100}`,
          headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + thing,
          },
          body: null,
        }).then(thing => {
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
