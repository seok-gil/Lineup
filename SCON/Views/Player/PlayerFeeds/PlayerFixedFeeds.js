import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {ApiFetch} from '../../../Components/API/ApiFetch';
import {
  CommentIcon,
  HeartEmptyIcon,
  PinnedIcon,
  TagIcon,
} from '../../../Assets/Icons';

export function PlayerFixedFeed({navigation}) {
  const [data, setData] = useState();

  useEffect(() => {
    ApiFetch({
      method: 'GET',
      url: `http://localhost:1337/api/fixed-events`,
      headers: {Authorization: 'token'},
      body: null,
    }).then(thing => {
      setData(thing);
    });
  }, []);
  //TODO comment 보이기
  if (data) {
    const today = new Date().getDate();
    var dDay = data.date.slice(8, 10) - today;
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('FeedScreen', {feedId: `${data.feedId}`})
        }>
        <View style={{flexDirection: 'row'}}>
          <Image source={TagIcon} />
          <Text>D - {dDay}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>고정됨</Text>
          <Image source={PinnedIcon} />
        </View>
        <Text>{data.content}</Text>
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
            <Text>{data.commentCnt} </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  } else return <View />;
}
