import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export function PlayerData({ data, navigation }) {
	const [rank, setRank] = useState({
	  "type": 'ALL',
	  "rank": '0',
	})
	useEffect(() => {
	  const ranks = data.ranks
	  const arr = []
	  for (var i in ranks)
		arr.push([i, ranks[i]])
	  arr.sort(function (a, b) {
		return a[1] - b[1];
	  });
	  if (arr[0]) {
		setRank({
		  "type": arr[0][0],
		  "rank": arr[0][1]
		})
	  }
	}, [])
  
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
  