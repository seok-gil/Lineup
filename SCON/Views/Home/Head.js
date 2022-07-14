import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {NickName} from './index';
import LogoImage from '../../Assets/Images/LineupLogo.png'; // svg로 교체 추천
import NotiIcon from '../../Assets/Images/NotiIcon.png'; // svg로 교체 추천

import styles from './Head.styles';

function AlertIcon({alert, navigation}) {
  return (
    <View style={[styles.alignment, styles.alertWrapper]}>
      <TouchableOpacity onPress={() => navigation.navigate('AlertScreen')}>
        <View style={styles.alertIconWrapper}>
          <Image source={NotiIcon} />
          {alert ? <View style={styles.alertBadge} /> : <></>}
        </View>
      </TouchableOpacity>
    </View>
  );
}

export function Head({Data, navigation}) {
  return (
    <View>
      <View style={styles.headerWrapper}>
        <View style={styles.alignment} />
        <View style={[styles.alignment, styles.imageWrapper]}>
          <Image source={LogoImage} />
        </View>
        <AlertIcon key={`Alert`} alert={Data.existAlarm} navigation={navigation} />
      </View>
      <NickName user={Data} />
    </View>
  );
}
