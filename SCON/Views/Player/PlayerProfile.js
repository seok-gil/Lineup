import React, { Component } from 'react';
import {
  Button,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Touch,
} from 'react-native';

import {DefaultProfileImage} from '../../Assets/Images';

function PlayerProfileTab({profile}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image source={DefaultProfileImage} style={styles.image} />
      <View style={{flexDirection: 'column'}}>
        <Text> {profile.major}</Text>
        <Text> {profile.belong}</Text>
      </View>
    </View>
  );
}

function PlayerData({profile, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Record', {names: ['Brent', 'Satya', 'Michaś']})
        }>
        <Text>전적</Text>
        <Text> {profile.score}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Fan', {names: ['Brent', 'Satya', 'Michaś']})
        }>
        <Text>팬</Text>
        <Text>{profile.fan}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Rank', {names: ['Brent', 'Satya', 'Michaś']})
        }>
        <Text>{profile.rank_type}</Text>
        <Text> {profile.rank}위</Text>
      </TouchableOpacity>
    </View>
  );
}

export function PlayerProfile({profile, navigation}) {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <PlayerProfileTab profile={profile} />
        <PlayerData profile={profile} navigation={navigation} />
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
