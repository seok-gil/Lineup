
import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import photo from '../Assets/Images/photo.png'


export function PhotoPick({ text, setPhoto }) {
  
  const onClick = () => {
    Alert.alert(
      text,
      "",
      [
        {
          text: "앨범에서 선택",
          onPress: async () => {
            const result = await launchImageLibrary();
            if (result.didCancel) {
              return null;
            }
            console.log(result)
            const localUri = result.assets[0].uri;
            const uriPath = localUri.split("//").pop();
            const imageName = localUri.split("/").pop();
            setPhoto("file://" + uriPath);
          }
        },
        {
          text: "카메라로 찍기",
          onPress: async () => {
            const result = await launchCamera({
              mediaType: 'photo',
              cameraType: 'back',
            });
            if (result.didCancel) {
              return null;
            }
            const localUri = result.assets[0].uri;
            const uriPath = localUri.split("//").pop();
            const imageName = localUri.split("/").pop();
            setPhoto("file://" + uriPath);
          }
        }
      ],
      { cancelable: false }
    );
  }
  return (
    <View>
      <TouchableOpacity onPress={onClick}>
        <Image source={photo} />
      </TouchableOpacity>
    </View>
  )
}
