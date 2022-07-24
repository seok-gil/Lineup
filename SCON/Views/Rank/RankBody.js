import React, {Component} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';

import RankMedal from './RankMedal';
import ETC from './ETC';

import {player} from '../../Assets/Data/Rank.json';
import styles from './RankBody.styles';

function RankBody({navigation, route}) {
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
