import React, { useEffect, useState } from 'react';
import {
  Button,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Touch,
} from 'react-native';

import { DefaultProfileImage } from '../../Assets/Images';




function PlayerProfileTab({ data }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image source={DefaultProfileImage} style={styles.image} />
      <View style={{ flexDirection: 'column' }}>
        <Text> {data.sport}</Text>
        <Text> {data.belong}</Text>
      </View>
    </View>
  );
}

function PlayerData({ data, navigation }) {

  const [rank, setRank] = useState({
    "type": '',
    "rank": '',
  })

  useEffect(() => {
    const ranks = data.ranks
    const arr = []
    for (var i in ranks)
      arr.push([i, ranks[i]])
    arr.sort(function (a, b) {
      return a[1] - b[1];
    });
    console.log(arr[0])
    if (arr[0]) {
      setRank({
        "type": arr[0][0],
        "rank": arr[0][1]
      })
      console.log(rank, "aaaa")
    }
  }, [data])


  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Record', { names: ['Brent', 'Satya', 'Michaś'] })
        }>
        <Text>전적</Text>
        <Text> {data.recordCnt}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Fan', { names: ['Brent', 'Satya', 'Michaś'] })
        }>
        <Text>팬</Text>
        <Text>{data.followCnt}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Rank', { names: ['Brent', 'Satya', 'Michaś'] })
        }>
        <Text>{rank.type.toUpperCase()}</Text>
        <Text> {rank.rank}위</Text>
      </TouchableOpacity>
    </View>
  );
}

export function PlayerProfile({ data, navigation }) {
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <PlayerProfileTab data={data} />
        <PlayerData data={data} navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '30%',
    height: '100%',
    resizeMode: 'contain',
  },
});
