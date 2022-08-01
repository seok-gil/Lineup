import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './PlayerData.styles';

function PlayerData({data, navigation}) {
  const [rank, setRank] = useState({
    type: 'ALL',
    rank: '0',
  });
  useEffect(() => {
    const ranks = data.rank;
    const arr = [];
    for (var i in ranks) arr.push([i, ranks[i]]);
    arr.sort(function (a, b) {
      return a[1] - b[1];
    });
    if (arr[0]) {
      setRank({
        type: arr[0][0],
        rank: arr[0][1],
      });
    }
  }, []);

  return (
    <View style={styles.playerDataWrapper}>
      <TouchableOpacity
        style={styles.playerDataElement}
        onPress={() =>
          navigation.navigate('Record', {names: ['Brent', 'Satya', 'Michaś']})
        }>
        <Text style={styles.playerDataTitle}>전적</Text>
        <Text style={styles.playerDataText}>{data.recordCnt}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.playerDataElement}
        onPress={() =>
          navigation.navigate('Follow', {names: ['Brent', 'Satya', 'Michaś']})
        }>
        <Text style={styles.playerDataTitle}>팬</Text>
        <Text style={styles.playerDataText}>{data.followerCnt}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.playerDataElement}
        onPress={() =>
          navigation.navigate('RankScreen', {names: ['Brent', 'Satya', 'Michaś']})
        }>
        <Text style={styles.playerDataTitle}>{rank.type.toUpperCase()}</Text>
        <Text style={styles.playerDataText}>{rank.rank}위</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PlayerData;
