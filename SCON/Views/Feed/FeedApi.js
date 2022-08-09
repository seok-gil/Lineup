import React, {useEffect, useState} from 'react'
import {ApiFetch} from '../../Components/API/ApiFetch'
import AsyncStorage from '@react-native-community/async-storage'

export async function FeedApi(url) {
   await AsyncStorage.getItem('accessToken').then(thing => {
    ApiFetch({
      method: 'GET',
      url: url,
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer ' + thing,
      },
      body: null,
    })
    .then((thing) => {
      temp = thing
    })
  })
  return temp
}