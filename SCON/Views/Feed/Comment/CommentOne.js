import React, {useEffect, useState} from 'react'
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native'

import {CommentModal, Reply} from './'
import {TimeRelative, LikeComponent} from '../../../Components'

import {
  HeartEmptyIcon,
  HeartFilledIcon,
  TabEllipsisIcon,
} from '../../../Assets/svgs'

import styles from './CommentOne.styles'

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
  console.log(data)
  return (
    <View style={styles.commentWrapper}>
      <View style={styles.commentTop}>
        <View style={styles.commentTopLeft}>
          <Image source={{uri: data.profilePic}} style={styles.image} />
          <Text style={styles.commentInfo}>
            {data.writer.nick} · <TimeRelative time={data.createDate} />
          </Text>
        </View>
        <TouchableOpacity onPress={() => setModal(true)}>
          <TabEllipsisIcon
            width={15}
            height={5}
            fill="#0E0E0E"
            style={styles.ellipsis}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.commentContent}>{data.content}</Text>
      <View style={styles.commentBottom}>
        <TouchableOpacity
          style={styles.likeWrapper}
          onPress={() => LikeComponent(data.ilike, likeUrl, setMount)}>
          {data.ilike ? (
            <HeartFilledIcon
              width={15}
              height={15}
              fill="#17D3F0"
              style={styles.icon}
            />
          ) : (
            <HeartEmptyIcon
              width={15}
              height={15}
              fill="#17D3F0"
              style={styles.icon}
            />
          )}
          <Text style={styles.commentInfoLight}>
            좋아요 {data.likeCnt ? data.likeCnt : 0}개{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.replyInfoWrapper}
          onPress={() => setViewReply(!viewReply)}>
          <Text style={styles.commentInfoLight}>
            {viewReply ? '답글 숨기기' : `답글 ${data.reply.length}개`}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setReplyFocus({id: data.commentId, nick: data.writer.nick})
          }>
          <Text style={styles.commentInfoLight}>답글 달기</Text>
        </TouchableOpacity>
      </View>
      {viewReply == true &&
        data.reply.map((item, index) => {
          return (
            <Reply
              key={`reply-${index}`}
              reply={item}
              feedId={feedId}
              index={index}
            />
          )
        })}
      <CommentModal
        modal={modal}
        setModal={setModal}
        nick={data.writer.nick}
        writerId={data.writer.writerId}
        commentId={data.commentId}
        setMount={setMount}
        navigation={navigation}
      />
    </View>
  )
}
