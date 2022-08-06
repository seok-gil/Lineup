import React, {useState, useEffect} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';

import RankMedal from './RankMedal';
import ETC from './ETC';
import {ApiFetch} from "../../Components/API/ApiFetch"
import {player} from '../../Assets/Data/Rank.json';
import styles from './RankBody.styles';
import AsyncStorage from "@react-native-community/async-storage"

function RankBody({navigation, route}) {
  console.log(route.params)
  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'GET',
          url: `/rank/{mod}?page={page}&size={size}`,
          headers: { 
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + thing,
          },
          body: null,
        }).then(thing => {
          // console.log("thing", thing)
          setData(thing);
        })
  })
  }, []);

  player.sort(function (a, b) {
    return parseFloat(b.player_like) - parseFloat(a.player_like);
  });
  return (
    <SafeAreaView style={styles.rankBodyWrapper}>
      <View style={styles.rankMedalWrapper}>
        <RankMedal player={player[1]} rank={2} navigation={navigation} />
        <RankMedal player={player[0]} rank={1} navigation={navigation} />
        <RankMedal player={player[2]} rank={3} navigation={navigation} />
      </View>
      <ScrollView>
        {player.map(
          (player, index) =>
            index > 3 && (
              <ETC
                player={player}
                index={index}
                key={`rankETC${index}`}
                navigation={navigation}
              />
            ),
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default RankBody;
