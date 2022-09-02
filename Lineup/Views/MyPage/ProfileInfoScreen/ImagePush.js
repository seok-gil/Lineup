import {View, Image, Text, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import {ImagePushAPI} from './ImagePushAPI'

import Amplify, {Storage} from 'aws-amplify'
import {GetUuid} from '../../../Components'
import awsconfig from '../../../src/aws-exports'

Amplify.configure(awsconfig)

Storage.configure({
    customPrefix: {
        public: '',
        protected: '',
        private: '',
    },
})

const fetchResourceFromURI = async uri => {
    const response = await fetch(uri)
    const blob = await response.blob()
    return blob
}

export async function ImagePush(photo, setPhoto, type, apiUrl) {
    try {
        const img = await fetchResourceFromURI(photo.asset.uri)
        var path = type + '/'
        return await Storage.put(path + GetUuid() + '.jpg', img, {
            level: 'public',
            contentType: 'photo',
        })
            .then(res => {
                Storage.get(res.key)
                    .then(result => {
                        setPhoto({
                            ...photo,
                            ['uri']: result,
                        })
                        const url = result.split('?')[0]
                        ImagePushAPI(url, apiUrl)
                        return url
                    })
                    .catch(err => {
                        console.log('err0', err)
                    })
            })
            .catch(err => {
                console.log('err0', err)
            })
    } catch {
        err => {
            console.log('eer1', err)
        }
    }
}
