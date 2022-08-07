import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PhotoIcon } from '../Assets/Icons';
import AsyncStorage from "@react-native-community/async-storage"
import { ApiFetch } from "./API/ApiFetch"

const DEFAULT_STYLE = {
  photoPickWrapper: {},
  photoPickImage: {},
  photoPickTouchable: {},
};

export function LikeComponent(ilike, url) {
  const type = ilike ? 'DELETE' : 'POST'
  var apiUrl = `/like/` + url
  AsyncStorage.getItem("accessToken")
    .then((thing) => {
      ApiFetch({
        method: type,
        url: apiUrl,
        headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        console.log("Like", thing)
      })
    })
}
