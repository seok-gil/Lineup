import React, {useState, useEffect} from 'react'
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native'

import {ApiFetch} from '../../Components/API/ApiFetch'
import styles from './FeedRegist.styles'
import AsyncStorage from '@react-native-community/async-storage'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export function FeedRegist({navigation, route}) {
    const type = route.params.type
    const [url, setUrl] = useState('/player/feed')
    const [feed, setFeed] = useState('')
    const onChange = e => {
        const {text} = e.nativeEvent
        setFeed(text)
    }
    useEffect(() => {
        if (type == 'PUT') {
            setFeed(route.params.content)
            setUrl(`/player/feed/${route.params.feedId}`)
        }
    }, [])

    const onPress = () => {
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: type,
                url: url,
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: JSON.stringify({
                    content: feed,
                }),
            })
                .then(navigation.goBack())
                .catch(error => {
                    console.log('Feed Regist ERROR', error)
                })
        })
    }
    return (
        <SafeAreaView style={styles.feedRegistWrapper}>
            <View style={styles.feedInnerWrapper}>
                <View style={styles.feedRegistTextWrapper}>
                    <Text style={styles.feedRegistLabel}>내용</Text>
                    <TextInput
                        multiline={true}
                        style={styles.feedRegistTextInput}
                        value={feed}
                        placeholder={'어떤 말을 남기고 싶으신가요?'}
                        placeholderTextColor="#C9C9C9"
                        onChange={e => onChange(e)}
                    />
                </View>
                <KeyboardAwareScrollView>
                <TouchableOpacity
                    style={styles.feedRegistButton}
                    onPress={() => onPress()}>
                    <Text style={styles.feedRegistButtonText}> 확인 </Text>
                </TouchableOpacity>
                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>
    )
}
