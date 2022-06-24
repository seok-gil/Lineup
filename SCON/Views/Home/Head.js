import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {NickName} from './index';
import LogoImage from '../../Assets/Images/LineupLogo.png'; // svg로 교체 추천
import AlertImage from '../../Assets/Images/AlertImage.png'; // svg로 교체 추천

import styles from './Head.styles';

function AlertIcon({alert, navigation}) {
  if (alert)
    return (
      <View style={[styles.alignment, styles.alertWrapper]}>
        <TouchableOpacity onPress={() => navigation.navigate('Alert')}>
          <View style={styles.alertIconWrapper}>
            <Image source={AlertImage} style={styles.alertIcon} />
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
          <Image source={LogoImage} style={styles.logoImage} />
        </View>
        <AlertIcon alert={Data.alert} navigation={navigation} />
      </View>
      <NickName user={Data.user} />
    </View>
  );
}
