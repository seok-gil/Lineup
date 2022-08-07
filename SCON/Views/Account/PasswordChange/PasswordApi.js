import React, {useRef, useState} from 'react'
import {ApiFetch} from '../../../Components'
import AsyncStorage from '@react-native-community/async-storage'

export function PasswordApi(body) {
    console.log(body)
    AsyncStorage.getItem('accessToken').then(thing => {
        ApiFetch({
            method: 'PUT',
            url: '/pw-change',
            headers: {
                'content-type': 'application/json',
                Authorization: 'Bearer ' + thing,
            },
            body: JSON.stringify(body),
        })
            .then(thing => {
                console.log(typeof thing, thing)
                if (thing == 406)
                // 비밀번호 불일치
                    return false
                return true
            })
            .catch(() => {
                return 'err'
            })
    })
}
