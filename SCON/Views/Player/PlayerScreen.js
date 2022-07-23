import React from 'react';
import {ApiFetchOne} from '../../Components/API/ApiFetch';
import {SafeAreaView} from 'react-native';
import {PlayerFeeds, PlayerFollow, PlayerProfile} from './';

export function PlayerScreen({navigation, route}) {
  const data = ApiFetchOne({
    method: 'GET',
    url: `http://localhost:1337/api/player-homes/${route.params.playerId}`,
    headers: {Authorization: 'token'},
    body: null,
  });

  if (!data) return <SafeAreaView />;
  return (
    <SafeAreaView>
      <PlayerProfile data={data} navigation={navigation} />
      <PlayerFollow data={data} navigation={navigation} />
      <PlayerFeeds playerId={route.params.playerId} navigation={navigation} />
    </SafeAreaView>
  );
}
