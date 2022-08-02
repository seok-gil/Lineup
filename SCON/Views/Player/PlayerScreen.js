import React, { useEffect, useState } from 'react';
import { ApiFetchOne, ApiFetch } from '../../Components/API/ApiFetch';
import { SafeAreaView, ScrollView } from 'react-native';

import PlayerProfile from './PlayerProfile';
import PlayerFeeds from './PlayerFeeds';
import AsyncStorage from "@react-native-community/async-storage"

export function PlayerScreen({ navigation, route }) {
  const [data, setData] = useState();
  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'GET',
          url: `http://15.164.100.211:8080/player-home/${route.params.playerId}`,
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
  
  if (!data) return <SafeAreaView />;
  return (
    <SafeAreaView>
      <ScrollView>
        <PlayerProfile data={data} navigation={navigation} />
        <PlayerFeeds playerId={route.params.playerId} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

