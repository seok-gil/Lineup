import React, { useEffect, useState } from 'react';
import { ApiFetchOne } from '../../Components/API/ApiFetch';

import { View, Text, Image, StyleSheet } from 'react-native';

import { DefaultProfileImage } from '../../../Assets/Images';
import { ViewMore, ReplyIcon } from "../../../Assets/Icons/"
import { Time } from '../../../Components';

export function Reply({ reply }) {
	return (
		<View style={{ flexDirection: 'column' }}>
			<View style={{ flexDirection: 'row' }}>
				<Image source={ReplyIcon} />
				<Image source={{ uri: reply.writer.profilePic }} style={styles.image} />
				<Text>{reply.writer.닉네임}</Text>
				<Time time={reply.commentDate} />
				<Image source={ViewMore} />
			</View>
			<Text>{reply.commentContent}</Text>
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