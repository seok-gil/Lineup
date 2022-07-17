import React, { useEffect, useState } from 'react';
import { ApiFetchOne } from '../../Components/API/ApiFetch';
import { TouchableOpacity, Text, View } from 'react-native';

import { ButtonMiddleOn, ButtonMiddleOff } from '../../Components';

export function PlayerFollow({ data, navigation }) {

  const [follow, setFollow] = useState(data.isFollow)

  const onFollow = () => {
    console.log("API")
  }

  if (!data.isMe)
    return (
      <ButtonMiddleOn text={"스토리 추가하기"} onPress={() => navigation.navigate('StoryScreen')} />
    )
  else {
    return (
      <View>
        {
          data.isFollow ?
            <ButtonMiddleOn text={"나의 라인업 추가됨"} onPress={() => navigation.navigate('StoryScreen')} />
            : <ButtonMiddleOff text={"나의 라인업 추가하기"} onPress={() => navigation.navigate('StoryScreen')} />
        }
      </View>
    )
  }
}



