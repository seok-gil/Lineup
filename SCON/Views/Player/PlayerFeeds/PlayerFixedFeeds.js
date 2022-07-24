import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {ApiFetch} from '../../../Components/API/ApiFetch';
import {
  CommentIcon,
  HeartEmptyIcon,
  PinnedIcon,
  TagIcon,
} from '../../../Assets/Icons';
import styles from './PlayerFixedFeeds.styles';

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
        }
        style={styles.fixedFeedWrapper}>
        <View style={styles.fixedFeedTag}>
          <View style={styles.fixedFeedTagInner}>
            <Image source={TagIcon} style={styles.fixedFeedTagImage} />
            <Text style={styles.fixedFeedTagText}>
              D{dDay <= 0 ? dDay : '-' + dDay}
            </Text>
          </View>
        </View>
        <View style={styles.fixedFeedPin}>
          <Image source={PinnedIcon} style={styles.fixedFeedPinIcon} />
          <Text style={styles.fixedFeedPinText}>고정됨</Text>
        </View>
        <Text style={styles.fixedFeedContent}>{data.content}</Text>
        <View style={styles.feedLikedBox}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('/', {names: ['Brent', 'Satya', 'Michaś']})
            }
            style={styles.feedLikedBox}>
            <Image source={HeartEmptyIcon} style={styles.likeIcon} />
            <Text style={styles.likeText}>{data.likeCnt}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('/', {names: ['Brent', 'Satya', 'Michaś']})
            }
            style={styles.feedLikedBox}>
            <Image source={CommentIcon} style={styles.likeIcon} />
            <Text style={styles.likeText}>{data.commentCnt} </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  } else return <View />;
}
