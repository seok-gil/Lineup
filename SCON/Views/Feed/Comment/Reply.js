import React, {useEffect, useState} from 'react'

import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

import {TimeRelative} from '../../../Components'
import {CommentModal} from './CommentModal'

import {TabEllipsisIcon} from '../../../Assets/svgs'
import {ReplyIcon} from '../Assets'
import styles from './Reply.styles'

export function Reply({reply}) {
  const [modal, setModal] = useState(false)
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
        <ReplyIcon width={11} height={9} />
        <Image source={{uri: reply.writer.profilePic}} style={styles.image} />
        <Text>{reply.writer.nick}</Text>
        <Text>
          <TimeRelative time={reply.createDate} />
        </Text>
      </View>
      <Text>{reply.content}</Text>
      <TouchableOpacity onPress={() => setModal(true)}>
        <TabEllipsisIcon style={styles.viewMoreIcon} />
      </TouchableOpacity>
      <CommentModal
        modal={modal}
        setModal={setModal}
        nick={reply.writer.nick}
        commentId={reply.replyId}
      />
    </View>
  )
}
