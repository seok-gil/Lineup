import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {ApiFetch, LikeComponent} from '../../../Components'
import {TimeRelative} from '../../../Components/Time'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Label} from '../../../Components/Label'
import { useIsFocused } from '@react-navigation/native';

import {CommentIcon, HeartEmptyIcon, HeartFilledIcon} from '../../../Assets/svgs'
import {PinIcon} from '../Assets'
import styles from './PlayerFixedFeeds.styles'

export function PlayerFixedFeed({navigation, playerId, mount, setMount}) {
  const isFocused = useIsFocused();
  const [data, setData] = useState()
  const [likeUrl, setLikeUrl] = useState()
  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/player-home/${playerId}/fixed-events`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', { navigation: navigation })
        }
        else {
          setData(thing[0])
          setLikeUrl(!thing[0].ilike ? `feed/${thing[0].feedId}` : `feed/${thing[0].ilike}`)
        }
      })
    })
  }, [mount, isFocused])
  if (!data) return <View />
  const today = new Date().getDate()
  var dDay = data.eventStart ? data.eventStart.slice(8, 10) - today : 0
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('FeedScreen', {feedId: `${data.feedId}`})
      }
      style={styles.fixedFeedWrapper}>
      <View style={styles.fixedFeedTag}>
        <View style={styles.fixedFeedTagInner}>
          <Label labelText={'D' + (dDay < 0 ? dDay : '-' + dDay)} />
        </View>
      </View>
      <View style={styles.fixedFeedPin}>
        <PinIcon style={styles.fixedFeedPinIcon} />
        <Text style={styles.fixedFeedPinText}>고정됨</Text>
      </View>
      <Text style={styles.fixedFeedContent}>{data.content}</Text>
      <View style={styles.feedLikedBox}>
        <TouchableOpacity
          onPress={() => LikeComponent(data.ilike, likeUrl, setMount)}
          style={styles.feedLikedBox}>
            {
            data.ilike ?
              <HeartFilledIcon
                width={15}
                height={15}
                fill="#17D3F0"
                style={styles.likeIcon}
              />
              :
              <HeartEmptyIcon
                width={15}
                height={15}
                fill="#0E0E0E"
                style={styles.likeIcon}
              />
            }
          <Text style={styles.likeText}>{data.likeCnt}</Text>
        </TouchableOpacity>
        <View style={styles.feedLikedBox}>
          <CommentIcon width={20} height={20} style={styles.likeIcon} />
          <Text style={styles.likeText}>{data.commentCnt} </Text>
          <Text style={styles.likeText}>
            <TimeRelative time={data.createDate} />
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
