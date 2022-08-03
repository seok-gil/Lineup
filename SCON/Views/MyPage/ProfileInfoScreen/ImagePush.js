import { View, Image, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';


import Amplify, { Storage } from 'aws-amplify';
import awsconfig from '../../../src/aws-exports';

Amplify.configure(awsconfig);

Storage.configure({
  customPrefix: {
    public: '',
    protected: '',
    private: ''
  }
})

export function ImagePush({ playerId, userPhoto, setUserPhoto, backPhoto, setBackPhoto, navigation }) {
  const [progressText, setProgressText] = useState();
  const [isLoading, setisLoading] = useState({
    profile: false,
    back: false,
  });

  const fetchResourceFromURI = async uri => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  };

  const onPushImage = async (asset, type) => {
    if (isLoading.type) return;
    setisLoading({
      ...isLoading,
      [type]: true,
    });
    const img = await fetchResourceFromURI(asset.uri);
    var path = type + '/'
    return Storage.put(path + type + "_" + playerId + "_" + Math.floor(Math.random() * 1000000) + ".jpg", img, {
      level: 'public',
      contentType: 'photo',
    })
      .then(res => {
        setProgressText('Upload Done: 100%');
        setisLoading({
          ...isLoading,
          [type]: false,
        });
        Storage.get(res.key)
          .then(result => {
            if (type == 'profile')
              setUserPhoto({
                ...userPhoto,
                ['uri'] : result
              })
            else
              setBackPhoto({
                ...backPhoto,
                ['uri'] : result
              })
          })
          .catch(err => {
            setProgressText('Upload Error');
            console.log("err", err);
          });
      })
      .catch(err => {
        setisLoading({
          ...isLoading,
          [type]: false,
        });
        setProgressText('Upload Error');
        console.log("eer", err);
      });
  };

  const onPress = () => {
    //TODO API
    if (userPhoto.set == true) {
      onPushImage(userPhoto.asset, "profile")
    }
    if (backPhoto.set == true) {
      onPushImage(backPhoto.asset, "back")
    }
    navigation.navigate('MyPageScreen')
  }
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Text>@@@@@@@@@@@@@@저장@@@@@@@@@@</Text>
    </TouchableOpacity>
  )
}