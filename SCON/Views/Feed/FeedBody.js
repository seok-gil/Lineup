import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'

import {TimeRelative} from '../../Components/Time'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {ApiFetch, LikeComponent} from '../../Components/'

import {CommentIcon, HeartEmptyIcon, HeartFilledIcon} from '../../Assets/svgs'
import styles from './FeedBody.styles'

export function FeedBody({data, feedId, navigation, setMount}) {
  var likeUrl = !data.ilike ? `feed/${data.feedId}` : `feed/${data.ilike}`

  const delFeed = () => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'DELETE',
        url: `/player/feed/${feedId}`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(() => {
        navigation.goBack()
      })
    })
  }

  const editFeed = () => {
    navigation.navigate('FeedRegist', {
      content: data.content,
      feedId: data.feedId,
      type: 'PUT',
    })
  }
  return (
    <View style={styles.feedBodyWrapper}>
      <View style={styles.contentWrapper}>
        <Text style={styles.content}>{data.content}</Text>
        <View style={styles.time}>
          <Text style={styles.timeText}>
            <TimeRelative time={data.createDate} />
          </Text>
        </View>
      </View>
      <View style={styles.commentButtons}>
        <View style={styles.icons}>
          <TouchableOpacity
            setMount={setMount}
            onPress={() => LikeComponent(data.ilike, likeUrl, setMount)}
            style={styles.iconWrapper}>
            {data.ilike ? (
              <HeartFilledIcon
                width={20}
                height={20}
                fill="#17D3F0"
                style={styles.icon}
              />
            ) : (
              <HeartEmptyIcon
                width={20}
                height={20}
                fill="#0E0E0E"
                style={styles.icon}
              />
            )}
            <Text style={styles.text}>{data.likeCnt}</Text>
          </TouchableOpacity>
          <View style={styles.iconWrapper}>
            <CommentIcon width={20} height={20} style={styles.icon} />
            <Text style={styles.text}>{data.commentCnt}</Text>
          </View>
        </View>
        <View style={styles.modify}>
          <TouchableOpacity
            onPress={() => editFeed()}
            style={styles.modifyButton}>
            <Text style={styles.text}>수정</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => delFeed()}
            style={styles.modifyButton}>
            <Text style={styles.text}>삭제</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
