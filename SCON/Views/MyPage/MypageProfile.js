import React from 'react';
import {Button, View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {DefaultProfileImage} from '../../Assets/Images';

import styles from './MypageProfile.styles';

function MypageProfile({navigation}) {
  return (
    <View style={styles.profileWrapper}>
      <View style={styles.profileInnerWrapper}>
        <Image source={DefaultProfileImage} style={styles.profileImage} />
        <Text style={styles.nickname}>닉네임</Text>
        <Text style={styles.email}>email@email.com</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.modifyButton}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.modifyButtonText}>사용자 정보 {'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MypageProfile;
