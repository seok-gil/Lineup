import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

import { CommentModal, Reply } from './'
import { HeartSEmptyIcon, HeartSFilledIcon, ViewMore } from '../../../Assets/Icons'
import { TimeRelative, LikeComponent } from '../../../Components'
export function CommentOne({ data, feedId, setReplyFocus, setMount }) {
  if (!data) return <View />
  const [viewReply, setViewReply] = useState(false)
  var likeUrl = !data.ilike ? `comment/${data.commentId}` : `comment/${data.ilike}`
  const [modal, setModal] = useState(false)
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Image source={{ uri: data.profilePic }} style={styles.image} />
        <Text>{data.writer.nick} </Text>
        <Text>
          {' '}
          <TimeRelative time={data.createDate} />{' '}
        </Text>
      </View>
      <Text>{data.content}</Text>
      <TouchableOpacity onPress={() => setModal(true)}>
        <Image source={ViewMore} />
      </TouchableOpacity>
      <CommentModal modal={modal} setModal={setModal} nick={data.writer.nick} writerId={data.writer.writerId} commentId={data.commentId} />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => LikeComponent(data.ilike, likeUrl, setMount)}>
          <Image source={data.ilike ? HeartSFilledIcon : HeartSEmptyIcon} />
          <Text>좋아요{data.likeCnt ? data.likeCnt : 0}개 </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setViewReply(!viewReply)}>
          <Text>
            {viewReply ? '답글 숨기기' : `답글 ${data.reply.length}개`}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setReplyFocus(data.commentId)}>
          <Text>답글 달기 </Text>
        </TouchableOpacity>
      </View>
      {viewReply == true &&
        data.reply.map(item => {
          return <Reply reply={item} feedId={feedId} />
        })}
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '10%',
    height: '100%',
    resizeMode: 'contain',
  },
})
