import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import styles from './ETC.styles';
import {DefaultProfileImage} from '../../Assets/Images';

function ETC({player, index, navigation}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Player', {names: ['Brent', 'Satya', 'Michaś']})
      }>
      <View style={{flexDirection: 'row'}}>
        <Text>{index}</Text>
        <Image source={DefaultProfileImage} style={styles.image2} />
        <Text> {player.player_name}</Text>
        <Text> {player.player_player_major}</Text>
        <Text> 좋아요 X {player.player_like} </Text>
      </View>
    </TouchableOpacity>
  );
}

export default ETC;
