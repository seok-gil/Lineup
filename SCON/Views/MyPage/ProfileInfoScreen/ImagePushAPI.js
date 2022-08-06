import React, { useEffect } from 'react';

import AsyncStorage from "@react-native-community/async-storage"
import { ApiFetch } from '../../../Components/API/ApiFetch';

export function ImagePushAPI(body, type) {
  var url = `my-page/`
  if (type == 'profile')
    url += `user-profile-pic`
  else if (type == 'back')
    url += `user-back-pic`
  AsyncStorage.getItem("accessToken")
    .then((thing) => {
      ApiFetch({
        method: 'PUT',
        url: url,
        headers: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + thing,
        },
        body: JSON.stringify({
          'imageUuid' : body
      })
      })
    })
}