import React, {useEffect} from 'react'

import AsyncStorage from '@react-native-community/async-storage'
import {ApiFetch} from '../../../Components'

export function PlayerRegistApi(body) {
    console.log(typeof(body['name']))
    AsyncStorage.getItem('accessToken').then(thing => {
        ApiFetch({
            method: 'POST',
            url: `/player-regist/application`,
            headers: {
                'content-type': 'application/json',
                Authorization: 'Bearer ' + thing,
            },
            body: JSON.stringify({
                body
            }),
        })
    })
}