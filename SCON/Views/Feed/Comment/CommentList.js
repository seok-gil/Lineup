import React, { useEffect, useState } from 'react';
import { ApiFetchOne } from '../../../Components/API/ApiFetch';
import { ButtonBig } from '../../../Components';
import {
	View,
	TouchableOpacity,
	Text,
	Image,
} from 'react-native';

import { CommentModal, Reply } from "./"
import { HeartSEmpty, HeartSFilled } from '../../../Assets/Icons';
import { DefaultProfileImage } from '../../../Assets/Images';
import { Time } from "../../../Components/Time"
function FeedComment({ comment }) {
	if (!comment) return <View />
	return (
		<View>
			<View style={{ flexDirection: 'row' }}>
				<Image source={DefaultProfileImage} />
				<Text> {comment.writer.닉네임} </Text>
				<Time time = {comment.commentDate}/>
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

export function CommentList({ navigation }) {
	const [data, setData] = useState([])
	const [lastFeed, setLastFeed] = useState(1)
	const [nextFeed, setNextFeed] = useState(2)

	useEffect(() => {
		const temp = data
		for (var i = lastFeed; i < nextFeed; ++i) {
			ApiFetchOne({
				method: 'GET',
				url: `http://localhost:1337/api/comments/${i}`,
				headers: { "Authorization": "token" },
				body: null
			})
				.then((thing => {
					temp.push(thing)
				}))
		}
		setLastFeed(nextFeed)
		setData(temp)
	}, [nextFeed])

	const view = [];
	const commentlist = () => {
		if (data) {
			for (let i = 0; i < data.length; ++i) {
				view.push(
					<FeedComment
						key={`player-comment-${i}`}
						comment={data[i]}
						navigation={navigation}
					/>,
				);
			}
			return view;
		};
	}
	return (
		<View>
			{commentlist()}
			<ButtonBig onPress={() => setNextFeed(nextFeed + 2)} text={`Feed 2보기${lastFeed} ~ ${nextFeed} @@@dummy`} />
		</View>
	);
}
