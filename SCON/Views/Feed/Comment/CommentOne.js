import React, { useEffect, useState } from 'react';
import { ScrollView, View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

import { CommentModal, Reply } from './';
import { HeartSEmptyIcon, HeartSFilledIcon } from '../../../Assets/Icons';
import { TimeRelative } from '../../../Components/Time';

export function CommentOne({ feedId, comment, setReplyFocus }) {
  if (!comment) return <View />;
  
  const [viewReply, setViewReply] = useState(false)
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Image source={{ uri: comment.profilePic }} style={styles.image} />
        <Text>{comment.writer.nick} </Text>
        <Text> <TimeRelative time={comment.createDate} /> </Text>
        <CommentModal />
      </View>
      <Text>{comment.content}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Image source={comment.ilike ? HeartSFilledIcon : HeartSEmptyIcon} />
        <Text>좋아요{comment.commentLikeCnt}개 </Text>
        <TouchableOpacity onPress={() => setViewReply(!viewReply)}>
          <Text>{viewReply ? "답글 숨기기" : `답글 ${comment.reply.length}개`}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setReplyFocus(comment.commentId)}>
          <Text>답글 달기 </Text>
        </TouchableOpacity>
      </View>
      {viewReply == true &&  comment.reply.map(item => {
        return <Reply reply={item} feedId={feedId} />
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '10%',
    height: '100%',
    resizeMode: 'contain',
  },
});
