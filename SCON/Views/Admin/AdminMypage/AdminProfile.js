import React from 'react';
import {View, Image, Text} from 'react-native';

import {DefaultProfileImage} from '../../../Assets/Images';

import styles from './AdminProfile.styles';
export function AdminProfile({data, navigation}) {
  if (!data) return <View />;
  return (
    <View style={styles.profileWrapper}>
      <Image source={DefaultProfileImage} style={styles.profileImage} />
      <Text style={styles.nickname}>관리자</Text>
      <Text style={styles.email}>{data.email} </Text>
    </View>
  );
}
