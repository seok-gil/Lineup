import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

import { CommentModal, Reply } from "./"
import { HeartSEmpty, HeartSFilled } from '../../../Assets/Icons';
import { TimeRelative } from "../../../Components"


//TODO heart EMPTY FILLED
export function CommentOne({ comment }) {
	if (!comment) return <View />
	return (
		<View>
			<View style={{ flexDirection: 'row' }}>
				<Image source={{uri: comment.writer.profilePic}} style={styles.image} />
				<Text>{comment.writer.닉네임} </Text>
				<TimeRelative time = {comment.commentDate}/>
				<CommentModal />
			</View>
			<Text>{comment.commentContent}</Text>
			<View style={{ flexDirection: 'row' }}>
				<Image source={HeartSEmpty} />
				<Text>좋아요{comment.commentLikeCnt}개 </Text>
				<TouchableOpacity onPress={() => onclick}>
					<Text>답글 숨기기 </Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => onclick}>
					<Text>답글 달기 </Text>
				</TouchableOpacity>
			</View>
			{comment.replys.map((item) => {
				return (<Reply reply={item} />)
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