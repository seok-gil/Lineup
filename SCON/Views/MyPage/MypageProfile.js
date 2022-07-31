import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ApiFetchOne } from '../../Components/API/ApiFetch';

import styles from './MypageProfile.styles';

export function MypageProfile({ navigation }) {

  const [data, setData] = useState();
  useEffect(() => {
    ApiFetchOne({
      method: 'GET',
      url: 'http://localhost:1337/api/mypages/1',
      headers: { Authorization: 'token' },
      body: null,
    }).then(thing => {
      setData(thing);
    });
  }, []);
  if (!data) return <View />;
  return (
    <View style={styles.profileWrapper}>
      <View style={styles.profileInnerWrapper}>
        <Image source={{ uri: data.ProfilePic }} style={styles.profileImage} />
        <Text style={styles.nickname}>{data.Name}</Text>
        <Text style={styles.email}>{data.Email}</Text>
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
