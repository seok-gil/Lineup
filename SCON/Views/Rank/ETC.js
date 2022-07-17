import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

import styles from './ETC.styles';
import {HeartIcon} from '../../Assets/Icons';
import {DefaultProfileImage} from '../../Assets/Images';

function ETC({player, index, navigation}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Player', {names: ['Brent', 'Satya', 'Michaś']})
      }
      style={styles.etcWrapper}>
      <Text style={styles.index}>{index}</Text>
      <Image source={DefaultProfileImage} style={styles.profileImage} />
      <View style={styles.profileWrapper}>
        <View>
          <View style={styles.profileInnerWrapper}>
            <Text style={styles.name}>{player.player_name}</Text>
            <Text>({player.player_major})</Text>
          </View>
          <Text style={styles.from}>소속</Text>
        </View>
        <View style={styles.likeCount}>
          <Image source={HeartIcon} style={styles.heart} />
          <Text style={styles.likes}>{player.player_like} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ETC;
