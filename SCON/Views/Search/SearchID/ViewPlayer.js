import React from 'react';
import {TouchableOpacity, View, Image, Text} from 'react-native';

import styles from './ViewPlayer.styles';
import {DefaultProfileImage} from '../../../Assets/Images';

function ViewPlayer({player, navigation}) {
  const {name, sport, belong} = player;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Player', {names: ['Brent', 'Satya', 'Michaś']})
      }>
      <View style={styles.viewPlayerWrapper}>
        <Image source={DefaultProfileImage} style={styles.viewPlayerImage} />
        <View style={styles.viewPlayerInfo}>
          <Text
            style={styles.playerName}
            numberOfLines={1}
            ellipsizeMode="tail">
            {name}
          </Text>
          <Text
            style={styles.playerDescription}
            numberOfLines={1}
            ellipsizeMode="tail">
            {sport} / {belong}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ViewPlayer;
