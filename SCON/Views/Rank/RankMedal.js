import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {CrownIcon, HeartIcon} from '../../Assets/Icons';

import {DefaultProfileImage} from '../../Assets/Images';
import {globalTextStyle} from '../../Styles';
import styles from './RankMedal.styles';

function RankMedal({player, rank, navigation}) {
  const isFirst = rank === 1 ? true : false;
  console.log(globalTextStyle);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Player', {names: ['Brent', 'Satya', 'Michaś']})
      }
      style={styles.rankMedalWrapper}>
      <View style={styles.profileWrapper}>
        {isFirst ? (
          <Image source={CrownIcon} style={styles.crown} />
        ) : (
          <Text style={styles.rank}>{rank}</Text>
        )}
        <Image
          source={DefaultProfileImage}
          style={isFirst ? styles.rankFirstImage : styles.rankImage}
        />
      </View>
      <View style={styles.playerNameWrapper}>
        <Text style={styles.boldText}>{player.player_name}</Text>
        <Text style={styles.playerMajor}>({player.player_major})</Text>
      </View>
      <Text style={styles.playerFrom}>소속</Text>
      <View style={styles.likes}>
        <Image source={HeartIcon} style={styles.heart} />
        <Text style={styles.boldText}>{player.player_like}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default RankMedal;
