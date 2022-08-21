import React, {useEffect, useState} from 'react'
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native'

import {CommentModal, Reply} from './'
import {TimeRelative, LikeComponent} from '../../../Components'

import {
  HeartEmptyIcon,
  HeartFilledIcon,
  TabEllipsisIcon,
} from '../../../Assets/svgs'

export function CommentOne({
  data,
  feedId,
  setReplyFocus,
  setMount,
  navigation,
}) {
  if (!data) return <View />
  const [viewReply, setViewReply] = useState(false)
  var likeUrl = !data.ilike
    ? `comment/${data.commentId}`
    : `comment/${data.ilike}`
  const [modal, setModal] = useState(false)
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: data.profilePic}} style={styles.image} />
        <Text>{data.writer.nick} </Text>
        <Text>
          {' '}
          <TimeRelative time={data.createDate} />{' '}
        </Text>
      </View>
      <Text>{data.content}</Text>
      <TouchableOpacity onPress={() => setModal(true)}>
        <TabEllipsisIcon />
      </TouchableOpacity>
      <CommentModal
        modal={modal}
        setModal={setModal}
        nick={data.writer.nick}
        writerId={data.writer.writerId}
        commentId={data.commentId}
        setMount={setMount}
        navigation={navigation}
      />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => LikeComponent(data.ilike, likeUrl, setMount)}>
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
          )}{' '}
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
        data.reply.map((item, index) => {
          return <Reply key={`reply-${index}`} reply={item} feedId={feedId} />
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
