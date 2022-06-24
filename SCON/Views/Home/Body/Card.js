import React, {Component, useState} from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';

import DefaultProfile from '../../../Assets/Images/ProfileDefault.png';
import AddIcon from '../../../Assets/Images/AddIcon.png';

import styles from './Card.styles';

export function PlayerCard({card, user_code, index, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Player')}
      style={[styles.cardWrapper, styles.playerCardWrapper]}>
      <Image source={DefaultProfile} style={styles.playerCardImage} />
      <Text style={styles.nameText}>{card.player_name}</Text>
    </TouchableOpacity>
  );
}

export function EmptyCard({user_code, index, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SearchStack')}
      style={[styles.cardWrapper, styles.emptyCardWrapper]}>
      <Image source={AddIcon} style={styles.emptyCardImage} />
    </TouchableOpacity>
  );
}

export function PlayerMyCard({view, navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Player')}
      style={[styles.cardWrapper, styles.playerMyCardWrapper]}>
      <Image source={DefaultProfile} style={styles.playerCardImage} />
      <Text style={styles.nameText}>MyPage</Text>
    </TouchableOpacity>
  );
}
