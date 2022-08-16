import React, {useEffect} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import {ApiFetch} from '../../../Components'

export function PlayerRegistApi(body) {
    AsyncStorage.getItem('accessToken').then(thing => {
        ApiFetch({
            method: 'POST',
            url: `/player-regist/application`,
            headers: {
                'content-type': 'application/json',
                Authorization: 'Bearer ' + thing,
            },
            body: JSON.stringify(body),
        })
    })
}