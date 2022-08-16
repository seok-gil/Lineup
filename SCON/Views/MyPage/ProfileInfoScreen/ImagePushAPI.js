import React, {useEffect} from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import {ApiFetch} from '../../../Components'

export function ImagePushAPI(body, apiUrl) {
    AsyncStorage.getItem('accessToken')
        .then(thing => {
            ApiFetch({
                method: 'PUT',
                url: apiUrl,
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: JSON.stringify({
                    imageUrl: body,
                }),
            })
        })
        .then(() => {
            console.log('sucees', )
        })
}
