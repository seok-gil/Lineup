import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {CommentIcon, HeartEmptyIcon} from '../../../Assets/Icons'
import {TimeRelative} from '../../../Components/Time'

import styles from './PlayerFeed.styles'

export function PlayerFeed({feed, navigation}) {
  if (!feed) return <View />
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('FeedScreen', {feedId: `${feed.feedId}`})
      }
      style={styles.feedWrapper}>
      <Text style={styles.feedContent}>{feed.content}</Text>
      <View style={styles.feedLikedBox}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('/', {names: ['Brent', 'Satya', 'Michaś']})
          }
          style={styles.feedLikedBox}>
          <Image source={HeartEmptyIcon} style={styles.likeIcon} />
          <Text style={styles.likeText}>{feed.likeCnt}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('/', {names: ['Brent', 'Satya', 'Michaś']})
          }
          style={styles.feedLikedBox}>
          <Image source={CommentIcon} style={styles.likeIcon} />
          <Text style={styles.likeText}>{feed.commentCnt}</Text>
          <Text style={styles.likeText}>
            {' '}
            <TimeRelative time={feed.createDate} />{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}
