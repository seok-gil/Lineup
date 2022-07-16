import React, { useEffect, useState } from 'react';
import { ApiFetchOne } from '../../Components/API/ApiFetch';

import { View, TouchableOpacity, SafeAreaView, Text, Image } from 'react-native';

import { CommentRegist, CommentList } from "./Comment"

import {Comment, HeartEmpty} from '../../Assets/Icons';
import  {Time} from "../../Components"
function FeedBody({ data }) {
  if (!data) return (<View />)
  return (
    <View>
      <Text>{data.content}</Text>
				<Time time ={data.date} />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('/', { names: ['Brent', 'Satya', 'Michaś'] })
          }
          style={{ flexDirection: 'row' }}>
          <Image source={HeartEmpty}/>
          <Text>{data.likeCnt}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('/', { names: ['Brent', 'Satya', 'Michaś'] })
          }
          style={{ flexDirection: 'row' }}>
          <Image source={Comment}/>
          <Text>{data.commentCnt}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


export function FeedScreen({ route, navigation }) {
  const [data, setData] = useState([])

  useEffect(() => {
    ApiFetchOne({
      method: 'GET',
      url: `http://localhost:1337/api/feeds/${route.params.feedId}`,
      headers: { "Authorization": "token" },
      body: null
    })
      .then((thing => {
        setData(thing)
      }))
  }, [])
  return (
    <SafeAreaView style={{ flex: 3, flexDirection: 'column' }}>
      <FeedBody data={data} />
      <CommentRegist />
      <CommentList navigation={navigation}/>
    </SafeAreaView>
  );
}
