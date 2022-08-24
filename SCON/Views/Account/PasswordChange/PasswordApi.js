import React, {useRef, useState} from 'react'
import {ApiFetch} from '../../../Components'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function PasswordApi(body) {
    var res = true
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
                if (thing.status == 406) {
                    // 비밀번호 불일치
                    res = false
                    return false
                }
                return true
            })
            .catch(() => {
                return 'err'
            })
            .finally(() =>{
            return (res)
            })
    })
}
