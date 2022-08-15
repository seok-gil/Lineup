import React, { useState, useEffect } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { ApiFetch, LikeComponent } from '../../../Components'
import {
    CommentIcon,
    HeartEmptyIcon,
    PinnedIcon,
    TagIcon,
} from '../../../Assets/Icons'
import styles from './PlayerFixedFeeds.styles'
import {TimeRelative} from '../../../Components/Time'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function PlayerFixedFeed({ navigation, playerId }) {
    const [data, setData] = useState()
    useEffect(() => {
        AsyncStorage.getItem('accessToken')
            .then((thing) => {
                ApiFetch({
                    method: 'GET',
                    url: `/player-home/${playerId}/fixed-events`,
                    headers: { 
                        'content-type': 'application/json',
                        'Authorization': 'Bearer ' + thing,
                    },
                    body: null,
                }).then(thing => {
                    setData(thing[0])
                })
            })
    }, [])
    if (!data) return <View />
    const today = new Date().getDate()
    var dDay = (data.data ? data.date.slice(8, 10) - today : 0)
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('FeedScreen', { feedId: `${data.feedId}` })
            }
            style={styles.fixedFeedWrapper}>
            <View style={styles.fixedFeedTag}>
                <View style={styles.fixedFeedTagInner}>
                    <Image source={TagIcon} style={styles.fixedFeedTagImage} />
                    <Text style={styles.fixedFeedTagText}>
            D{dDay < 0 ? dDay : '-' + dDay}
                    </Text>
                </View>
            </View>
            <View style={styles.fixedFeedPin}>
                <Image source={PinnedIcon} style={styles.fixedFeedPinIcon} />
                <Text style={styles.fixedFeedPinText}>고정됨</Text>
            </View>
            <Text style={styles.fixedFeedContent}>{data.content}</Text>
            <View style={styles.feedLikedBox}>
                <TouchableOpacity
                onPress={() => LikeComponent(data.ilike, `feed/${data.feedId}`)}
                    style={styles.feedLikedBox}>
                    <Image source={HeartEmptyIcon} style={styles.likeIcon} />
                    <Text style={styles.likeText}>{data.likeCnt}</Text>
                </TouchableOpacity>
                <View
                    style={styles.feedLikedBox}>
                    <Image source={CommentIcon} style={styles.likeIcon} />
                    <Text style={styles.likeText}>{data.commentCnt} </Text>
                    <Text style={styles.likeText}> <TimeRelative time={data.createDate} /> </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
