import React, { useRef, useState } from 'react';
import { ApiFetch } from "../../../Components"
import AsyncStorage from "@react-native-community/async-storage"

export function PlayerRegistApi(body) {
  console.log(body)
  AsyncStorage.getItem("accessToken")
    .then((thing) => {
      ApiFetch({
        method: 'POST',
        url: `/player-regist/application`,
        headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + thing,
        },
        body: JSON.stringify(body),
      }).then(thing => {
      })
        .catch(() => {
          return("err")
        })
    })
}