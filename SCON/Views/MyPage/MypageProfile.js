import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ApiFetch } from '../../Components/API/ApiFetch';
import AsyncStorage from "@react-native-community/async-storage"

import styles from './MypageProfile.styles';

export function MypageProfile({ navigation }) {
  const [data, setData] = useState();

  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'GET',
          url: `http://15.164.100.211:8080/my-page`,
          headers: { 
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + thing,
          },
          body: null,
        }).then(thing => {
          console.log("thing", thing)
          setData(thing);
        })
  })
  }, []);
  
  if (!data) return <View />;
  return (
    <View style={styles.profileWrapper}>
      <View style={styles.profileInnerWrapper}>
        <Image source={{ uri: data.profilePic }} style={styles.profileImage} />
        <Text style={styles.nickname}>{data.name}</Text>
        <Text style={styles.email}>{data.email}</Text>
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
