import React, {useEffect, useState} from 'react'
import {View, TouchableOpacity, Text, Image} from 'react-native'

import {CommentModal, Reply} from './'
import {TimeRelative, LikeComponent, ApiFetch} from '../../../Components'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
  mount,
  setMount,
  navigation,
  isMe
}) {
  if (!data) return <View />
  const [viewReply, setViewReply] = useState(false)
  var likeUrl = !data.ilike
    ? `comment/${data.commentId}`
    : `comment/${data.ilike}`
  const [modal, setModal] = useState(false)

  const [reply, setReply] = useState([])
  const [size, setSize] = useState(10)

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/feed/${feedId}/${data.commentId}?page=${0}&size=${size}`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', {navigation : navigation})
        }
        else
          setReply(thing.content)
      })
    })
  }, [size, mount])
  return (
    <View style={styles.commentWrapper}>
      <View style={styles.commentTop}>
        <View style={styles.commentTopLeft}>
          <Image source={{uri: data.writer.profilePic}} style={styles.image} />
          <Text style={styles.commentInfo}>
            {data.writer.nick} · <TimeRelative time={data.createDate} />
          </Text>
        </View>
        <TouchableOpacity 
        hitSlop={{ top: 25, bottom: 25, left: 20, right: 20}}
        onPress={() => setModal(true)}>
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
            {viewReply ? '답글 숨기기' : `답글 ${reply ? reply.length : 0}개`}
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
        reply.map((item, index) => {
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
        isMe={isMe}
      />
    </View>
  )
}
