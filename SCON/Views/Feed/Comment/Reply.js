import React, {useEffect, useState} from 'react'

import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

import {TimeRelative} from '../../../Components'
import {CommentModal} from './CommentModal'

import {TabEllipsisIcon} from '../../../Assets/svgs'
import {ReplyIcon} from '../Assets'
import styles from './Reply.styles'

export function Reply({reply, index}) {
  const [modal, setModal] = useState(false)
  return (
    <View style={index === 0 ? styles.replyWrapperFirst : styles.replyWrapper}>
      {index === 0 && (
        <ReplyIcon width={20} height={15} style={styles.replyIcon} />
      )}
      <View style={styles.replyTop}>
        <View style={styles.replyTopLeft}>
          <Image source={{uri: reply.writer.profilePic}} style={styles.image} />
          <Text style={styles.replyInfo}>
            {reply.writer.nick} · <TimeRelative time={reply.createDate} />
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setModal(true)}
          style={styles.replyTopRight}>
          <TabEllipsisIcon fill="#0E0E0E" style={styles.viewMoreIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.replyBottom}>
        <Text style={styles.content}>{reply.content}</Text>
      </View>
      <CommentModal
        modal={modal}
        setModal={setModal}
        nick={reply.writer.nick}
        commentId={reply.replyId}
      />
    </View>
  )
}
