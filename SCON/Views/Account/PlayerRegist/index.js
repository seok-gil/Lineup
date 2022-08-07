import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import AsyncStorage from "@react-native-community/async-storage"
import { ApiFetch } from "./../../../Components"
import { PlayerRegistForm } from './PlayerRegistForm';
import { PlayerRegistResultPage } from './PlayerRegistReusltPage';

export function PlayerRegist({ navigation }) {
  const [code, setCode] = useState()
  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'GET',
          url: `/player-regist/`,
          headers: { 
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + thing,
          },
          body: null,
        }).then(thing => {
          console.log("thing", thing)
          setCode(thing);
        })
  })
  }, []);
  if (code == 404)
    return (<PlayerRegistForm/>)
  else if (code == 200)
    return (<PlayerRegistResultPage/>)
  else
    return <SafeAreaView/>
}
