import React, {Component} from 'react';

import {Button, Text, View, Image} from 'react-native';

import DefaultProfile from '../../Assets/Images/ProfileDefault.png';
import styles from './NickName.styles';

export function NickName({user}) {
  const name = user.nickname;
  const email = user.email;
  return (
    <View style={styles.viewWrapper}>
      <Image source={DefaultProfile} style={styles.image} />
      <View style={styles.viewProfileInfo}>
        <Text style={styles.nameText} numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>
        <Text style={styles.emailText} numberOfLines={1} ellipsizeMode="tail">
          {email}
        </Text>
      </View>
    </View>
  );
}
