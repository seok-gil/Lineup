import React, {useEffect, useState} from 'react';
import {Image, View, Text} from 'react-native';

import PlayerData from './PlayerData';
import PlayerFollowButton from './PlayerFollowButton';
import styles from './PlayerProfile.styles';

import {DefaultProfileImage, SwimmingBackground} from '../../../Assets/Images';

function PlayerProfile({data, navigation}) {
  return (
    <View style={styles.profileInnerWrapper}>
      <Image source={SwimmingBackground} style={styles.backgroundImage} />
      <Image source={DefaultProfileImage} style={styles.profileImage} />
      <View style={styles.profileBottom}>
        <View style={styles.playerInfo}>
          <View style={styles.playerInfoLeft}>
            <Text style={styles.playerMajor}>수영선수 {/* data.sport */}</Text>
            <Text style={styles.playerSchool}>
              강원체육고등학교 {/* data.belong */}
            </Text>
          </View>
          <PlayerData data={data} navigation={navigation} />
        </View>
        <PlayerFollowButton data={data} navigation={navigation} />
      </View>
    </View>
  );
}

export default PlayerProfile;
