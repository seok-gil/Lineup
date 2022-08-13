import React, {useEffect, useState} from 'react'
import {ApiFetch} from '../../Components/API/ApiFetch'
import AsyncStorage from '@react-native-community/async-storage'
import {View, TouchableOpacity, SafeAreaView, Text, Image} from 'react-native'
import { FeedApi } from './FeedApi'
import {CommentRegist, ReplyRegist, CommentList} from './Comment'
import {FeedBody} from './FeedBody'
import { useIsFocused } from '@react-navigation/native'

export function FeedScreen({route, navigation}) {
    const [data, setData] = useState()
    const [mount, setMount] = useState(new Date())
    const [replyFocus, setReplyFocus] = useState(null)
    const isFocused = useIsFocused()
    
    useEffect(() => {
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'GET',
                url: `/feed/${route.params.feedId}`,
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: null,
            }).then(thing => {
                setData(thing)
            })
        })
    }, [mount])

    if (!data) return <SafeAreaView />
    return (
        <SafeAreaView style={{flex: 3, flexDirection: 'column'}}>
            <FeedBody
                data={data}
                feedId={route.params.feedId}
                navigation={navigation}
                setMount={setMount}
            />
                
            <CommentRegist 
            feedId={route.params.feedId} 
            setMount={setMount}/>
            <CommentList
                feedId={route.params.feedId}
                setReplyFocus={setReplyFocus}
                navigation={navigation}
                setMount={setMount}
            />
            <ReplyRegist
                feedId={route.params.feedId}
                replyFocus={replyFocus}
                setReplyFocus={setReplyFocus}
                setMount={setMount}
            />
        </SafeAreaView>
    )
}
