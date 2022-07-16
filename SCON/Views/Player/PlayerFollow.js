import React, { useEffect, useState } from 'react';
import { ApiFetchOne } from '../../Components/API/ApiFetch';
import { TouchableOpacity, Text, View } from 'react-native';

import { ButtonMiddleOn, ButtonMiddleOff } from '../../Components';

export function PlayerFollow({ data, navigation }) {


  if (!data.isMe)
    return (
      <ButtonMiddleOn text={"스토리 추가하기"} onPress={() => navigation.navigate('StoryScreen')} />
    )
  else {
    const follow = true
    //TODO follow 유뮤 check api
    // useEffect(() => {
    // 	ApiFetchOne({
    // 		method: 'GET',
    // 		url: `http://localhost:1337/api/player-follow/${route.params.playerId}`,
    // 		headers: { "Authorization": "token" },
    // 		body: null
    // 	})
    // 		.then((thing => {
    // 			setData(thing)
    // 		}))
    // }, [data])
    return (
      <View>
        {
          follow ?
            <ButtonMiddleOn text={"나의 라인업 추가됨"} onPress={() => navigation.navigate('StoryScreen')} />
            : <ButtonMiddleOff text={"나의 라인업 추가하기"} onPress={() => navigation.navigate('StoryScreen')} />
        }
      </View>
    )
  }
}



