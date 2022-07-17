import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, SafeAreaView, Text, Image } from 'react-native';
import { Comment, HeartEmpty } from '../../Assets/Icons';
import { Time } from "../../Components"

export function FeedBody({ data }) {
  if (!data) return (<View />)
  return (
    <View>
      <Text>{data.content}</Text>
      <Time time={data.date} />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('/', { names: ['Brent', 'Satya', 'Michaś'] })
          }
          style={{ flexDirection: 'row' }}>
          <Image source={HeartEmpty} />
          <Text>{data.likeCnt}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('/', { names: ['Brent', 'Satya', 'Michaś'] })
          }
          style={{ flexDirection: 'row' }}>
          <Image source={Comment} />
          <Text>{data.commentCnt}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


