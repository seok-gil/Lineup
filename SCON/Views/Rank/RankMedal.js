import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';

import {DefaultProfileImage} from '../../Assets/Images';

function RankMedal({player, rank, navigation}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Player', {names: ['Brent', 'Satya', 'Michaś']})
      }>
      <Text>{rank}</Text>
      <Image source={DefaultProfileImage} style={styles.image} />
      <Text> {player.player_name}</Text>
      <Text> {player.player_player_major}</Text>
      <Text> 좋아요 X {player.player_like} </Text>
    </TouchableOpacity>
  );
}

export default RankMedal;
