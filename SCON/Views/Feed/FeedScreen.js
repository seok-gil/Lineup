import React, {Component, useState} from 'react';

import {
  Button,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TextInput,
} from 'react-native';

import {DefaultProfileImage} from '../../Assets/Images';

function FeedBody({data}) {
  return (
    <View>
      <Text>{data.content}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('/', {names: ['Brent', 'Satya', 'Michaś']})
          }
          style={{flexDirection: 'row'}}>
          <Text>하트</Text>
          <Text>{data.like_cnt}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('/', {names: ['Brent', 'Satya', 'Michaś']})
          }
          style={{flexDirection: 'row'}}>
          <Text>댓글</Text>
          <Text>{data.coment_cnt}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function FeedComment({comment, navigation}) {
  console.log(comment);
  return (
    <>
      <Text>
        {comment.user_id} : {comment.comment_content}
      </Text>
    </>
  );
}

function CommentList({data, navigation}) {
  const view = [];
  console.log(data);
  const commentlist = () => {
    for (let i = 0; i < data.length; ++i) {
      view.push(
        <FeedComment
          key={`player-comment-${i}`}
          comment={data[i]}
          navigation={navigation}
        />,
      );
    }
    return view;
  };
  return <View>{commentlist()}</View>;
}

function CommentRegist({value}) {
  const [name, setName] = useState('');
  return (
    <View style={{flexDirection: 'row'}}>
      <Image source={DefaultProfileImage} />
      <TextInput
        value={value}
        placeholder={'댓글 쓰기'}
        placeholderTextColor="#C5C8CE"
        onChangeText={text => setName(text)}
      />
    </View>
  );
}

export function FeedScreen({navigation}) {
  const Data = require('../../Assets/Data/Feed.json').Feed;
  return (
    <SafeAreaView style={{flex: 3, flexDirection: 'column'}}>
      <FeedBody data={Data} />
      <CommentRegist />
      <CommentList data={Data.comment} />
    </SafeAreaView>
  );
}
