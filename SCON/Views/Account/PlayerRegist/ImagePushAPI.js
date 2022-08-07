import React, {useEffect} from 'react'

import AsyncStorage from '@react-native-community/async-storage'
import {ApiFetch} from './'

export function ImagePushAPI(body, apiUrl) {
    AsyncStorage.getItem('accessToken').then(thing => {
        ApiFetch({
            method: 'PUT',
            url: apiUrl,
            headers: {
                'content-type': 'application/json',
                Authorization: 'Bearer ' + thing,
            },
            body: JSON.stringify({
                imageUuid: body,
            }),
        })
    })
}
