import React, {Component} from 'react';

import {Button, Text, View, Image} from 'react-native';

import styles from './NickName.styles';
import {DefaultProfileImage} from '../../Assets/Images';

export function NickName({user}) {
  const name = user.nickname;
  const email = user.email;
  return (
    <View style={styles.viewWrapper}>
      <Image source={{uri : user.profilePic}} style={styles.image} />
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
