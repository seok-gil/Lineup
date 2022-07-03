import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';

import DefaultProfile from '../../../Assets/Images/ProfileDefault.png';
import styles from './ViewPlayer.styles';

function ViewPlayer({player, navigation}) {
  const {player_name, player_major, player_belong} = player;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Player', {names: ['Brent', 'Satya', 'Michaś']})
      }>
      <View style={styles.viewPlayerWrapper}>
        <Image source={DefaultProfile} style={styles.viewPlayerImage} />
        <View style={styles.viewPlayerInfo}>
          <Text
            style={styles.playerName}
            numberOfLines={1}
            ellipsizeMode="tail">
            {player_name}
          </Text>
          <Text
            style={styles.playerDescription}
            numberOfLines={1}
            ellipsizeMode="tail">
            {player_major} / {player_belong}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ViewPlayer;
