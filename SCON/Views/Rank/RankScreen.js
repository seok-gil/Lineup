import React, {Component} from 'react';
import {
  Button,
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ETC from './ETC';

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

function RankBody({navigation, route}) {
  const Data = require('../../Assets/Data/Rank.json').player;
  Data.sort(function (a, b) {
    return parseFloat(b.player_like) - parseFloat(a.player_like);
  });
  return (
    <SafeAreaView style={{flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
        <RankMedal player={Data[0]} rank="1" navigation={navigation} />
        <RankMedal player={Data[1]} rank="2" navigation={navigation} />
        <RankMedal player={Data[2]} rank="3" navigation={navigation} />
      </View>
      <ScrollView>
        {Data.map((player, index) => (
          <ETC
            player={player}
            index={index}
            key={`rankETC${index}`}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const RankStack = createMaterialTopTabNavigator();

export function RankScreen({navigation}) {
  return (
    <RankStack.Navigator>
      <RankStack.Screen name="Day" component={RankBody} />
      <RankStack.Screen name="Week" component={RankBody} />
      <RankStack.Screen name="Month" component={RankBody} />
      <RankStack.Screen name="All" component={RankBody} />
    </RankStack.Navigator>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
  },
  image2: {
    width: '10%',
    height: '100%',
    resizeMode: 'contain',
  },
});
