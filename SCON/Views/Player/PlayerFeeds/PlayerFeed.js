import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {CommentIcon, HeartEmptyIcon} from '../../../Assets/Icons';
import {TimeRelative} from '../../../Components/Time';

export function PlayerFeed({feed, navigation}) {
  if (!feed) return <View />;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('FeedScreen', {feedId: `${feed.feedId}`})
      }>
      <Text>{feed.content}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('/', {names: ['Brent', 'Satya', 'Michaś']})
          }
          style={{flexDirection: 'row'}}>
          <Image source={HeartEmptyIcon} />
          <Text>{feed.likeCnt}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('/', {names: ['Brent', 'Satya', 'Michaś']})
          }
          style={{flexDirection: 'row'}}>
          <Image source={CommentIcon} />
          <Text>{feed.commentCnt}</Text>
          <TimeRelative time={feed.date} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
