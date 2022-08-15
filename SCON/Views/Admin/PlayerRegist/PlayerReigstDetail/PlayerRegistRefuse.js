import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ApiFetch } from '../../../../Components'
export function PlayerRegistRefuse({ navigation, params }) {
    const [isSelected, setSelection] = useState(false)
    const [refuseContent, setRefuseComment] = useState()
    const state = params.state
    const onInput = e => {
        const { text } = e.nativeEvent
        setRefuseComment(text)
    }
    const onAccept = () => {
        AsyncStorage.getItem('accessToken')
            .then((thing) => {
                ApiFetch({
                    method: 'POST',
                    url: `/admin/player-regist-detail/${params.playerRegistId}`,
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': 'Bearer ' + thing,
                    },
                    body: null,
                }).then(() => {
                    navigation.navigate('AdminMyPageScreen')
                })
            })
    }
    const onRefuse = () => {
        AsyncStorage.getItem('accessToken')
            .then((thing) => {
                ApiFetch({
                    method: 'PUT',
                    url: `/admin/player-regist-detail/${params.playerRegistId}`,
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': 'Bearer ' + thing,
                    },
                    body: JSON.stringify({
                        refuseContent
                    })
                }).then(() => {
                    navigation.navigate('AdminMyPageScreen')
                })
            })
    }
    const onClick = () => {
        setSelection(!isSelected)
    }
    return (
        <View>
            {state != 1 ? (
                <View>
                    <CheckBox
                        value={isSelected}
                        boxType="square"
                        onValueChange={() => onClick()} />
                    <Text>반려 사유</Text>
                    <TextInput
                        disabled={!isSelected}
                        value={refuseContent}
                        placeholder={'내용을 입력해주세요.'}
                        placeholderTextColor="#0E0E0E66"
                        onChange={e => onInput(e)}
                    />
                    <TouchableOpacity
                        disabled={!isSelected}
                        onPress={() => onRefuse()}
                    >
                        <Text>반려</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View />
            )}
            {state == 0 ? (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        disabled={isSelected}
                        onPress={() => onAccept()}>
                        <Text>승인</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled={!isSelected}
                        onPress={() => onRefuse()}
                    >
                        <Text>반려</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View />
            )}
        </View>
    )
}
