import React, {useEffect, useState} from 'react'
import {ApiFetch} from '../../Components/API/ApiFetch'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function FeedApi(url) {
  var temp
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
      if (thing == 401) {
        navigation.navigate('RefreshTokenModal', {navigation : navigation})
      }
      else
        temp = thing
    })
  })
  return temp
}