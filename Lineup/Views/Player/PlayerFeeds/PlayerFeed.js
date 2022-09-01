import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { TimeRelative, LikeComponent } from '../../../Components'
import { CommentIcon, HeartEmptyIcon, HeartFilledIcon } from '../../../Assets/svgs'

import styles from './PlayerFeed.styles'

export function PlayerFeed({ feed, navigation, setMount }) {
  if (!feed) return <View />
  var likeUrl = !feed.ilike ? `feed/${feed.feedId}` : `feed/${feed.ilike}`
  const onPress = () => {
    LikeComponent(feed.ilike, likeUrl, setMount)
  }
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('FeedScreen', { feedId: `${feed.feedId}` })
      }
      style={styles.feedWrapper}>
      <Text style={styles.feedContent}>{feed.content}</Text>
      <View style={styles.feedLikedBox}>
        <TouchableOpacity
          onPress={() => onPress()}
          style={styles.feedLikedBox}>
          {
            feed.ilike ?
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
          <Text style={styles.likeText}>{feed.likeCnt}</Text>
        </TouchableOpacity>
        <View style={styles.feedLikedBox}>
          <CommentIcon width={15} height={15} style={styles.likeIcon} />
          <Text style={styles.likeText}>{feed.commentCnt}</Text>
          <Text style={styles.likeText}>
            <TimeRelative time={feed.createDate} />
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
