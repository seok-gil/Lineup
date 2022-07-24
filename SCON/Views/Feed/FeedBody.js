import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, SafeAreaView, Text, Image} from 'react-native';
import {CommentIcon, HeartEmptyIcon} from '../../Assets/Icons';
import {TimeRelative} from '../../Components/Time';

export function FeedBody({data}) {
  if (!data) return <View />;
  return (
    <View>
      <Text>{data.content}</Text>
      <TimeRelative time={data.date} />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('/', {names: ['Brent', 'Satya', 'Michaś']})
          }
          style={{flexDirection: 'row'}}>
          <Image source={HeartEmptyIcon} />
          <Text>{data.likeCnt}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('/', {names: ['Brent', 'Satya', 'Michaś']})
          }
          style={{flexDirection: 'row'}}>
          <Image source={CommentIcon} />
          <Text>{data.commentCnt}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
