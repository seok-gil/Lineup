import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, SafeAreaView, Text, Image } from 'react-native';
import { CommentIcon, HeartEmptyIcon } from '../../Assets/Icons';
import { TimeRelative } from '../../Components/Time';
import AsyncStorage from "@react-native-community/async-storage"
import { ApiFetch, LikeComponent } from "../../Components/"
export function FeedBody({ data, feedId, navigation }) {
  // if (!data) return <View />;
  var likeUrl = !data.ilike ? `feed/${data.feedId}` : `feed/${feedLikeId}`
  const delFeed = () => {
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'DELETE',
          url: `/player/feed/${feedId}`,
          headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + thing,
          },
          body: null,
        }).then(thing => {
          navigation.goBack()
        })
      })
  }

  const editFeed = () => {
    navigation.navigate('FeedRegist',
      { content: data.content, feedId: data.feedId, type: "PUT" }
    )
  }
  
  return (
    <View>
      <Text>{data.content}</Text>
      <Text ><TimeRelative time={data.createDate} /></Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => LikeComponent(data.ilike, likeUrl)}
          style={{ flexDirection: 'row' }}>
          <Image source={HeartEmptyIcon} />
          <Text>{data.likeCnt}</Text>
        </TouchableOpacity>
        <View
          style={{ flexDirection: 'row' }}>
          <Image source={CommentIcon} />
          <Text>{data.commentCnt}</Text>
        </View>
        <TouchableOpacity
          onPress={() => editFeed()}
          style={{ flexDirection: 'row' }}>
          <Text>수정</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => delFeed()}
          style={{ flexDirection: 'row' }}>
          <Text>삭제</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
