import React, { useEffect, useState } from 'react';
import { ApiFetchOne } from '../../Components/API/ApiFetch';
import { SafeAreaView, ScrollView } from 'react-native';

import PlayerProfile from './PlayerProfile';
import PlayerFeeds from './PlayerFeeds';

export function PlayerScreen({ navigation, route }) {
  const [data, setData] = useState();

  useEffect(() => {
    ApiFetchOne({
      method: 'GET',
      url: `http://localhost:1337/api/player-homes/${route.params.playerId}`,
      headers: { Authorization: 'token' },
      body: null,
    }).then(setData);
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
