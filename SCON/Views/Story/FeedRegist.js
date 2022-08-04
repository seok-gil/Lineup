import React, { useState, useEffect } from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import { ApiFetch } from "../../Components/API/ApiFetch"
import styles from './FeedRegist.styles';
import { globalButtonStyle, globalButtonTextStyle } from '../../Styles';
import AsyncStorage from "@react-native-community/async-storage"

export function FeedRegist({ navigation }) {
  const [feed, setFeed] = useState('');

  const onChange = (e) => {
    const { text } = e.nativeEvent;
    setFeed(text);
  };

  const onPress = () => {
    console.log(feed)
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'POST',
          url: `http://15.164.100.211:8080/player/feed`,
          headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + thing,
          },
          body: JSON.stringify({
            "content" : feed
        })
        }).then(thing => {
          console.log("Feed", thing)
          navigation.navigate('StoryScreen')
        }).catch(error => {
          console.log("Login ERROR", error)


        })
    })
}
  return (
    <SafeAreaView style={styles.feedRegistWrapper}>
      <View style={styles.feedInnerWrapper}>
        <View style={styles.feedRegistTextWrapper}>
          <Text style={styles.feedRegistLabel}>내용</Text>
          <TextInput
            multiline={true}
            style={styles.feedRegistTextInput}
            value={feed}
            placeholder={'어떤 말을 남기고 싶으신가요?'}
            placeholderTextColor="#C9C9C9"
            onChange={(e) => onChange(e)}
            onSubmitEditing={() => searchRef.current.focus()}
          />
        </View>
        <TouchableOpacity
          style={styles.feedRegistButton}
          onPress={() => onPress()}>
          <Text style={styles.feedRegistButtonText}> 확인 </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
