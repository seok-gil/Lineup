import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PhotoIcon } from '../Assets/Icons';


const DEFAULT_STYLE = {
  photoPickWrapper: {},
  photoPickImage: {},
  photoPickTouchable: {},
};
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from '../src/aws-exports';

Amplify.configure(awsconfig);

export function PhotoPick({ text, photo, setPhoto, styles = DEFAULT_STYLE }) {
  const onClick = () => {
    Alert.alert(
      text,
      '',
      [
        {
          text: '앨범에서 선택',
          onPress: async () => {
            const result = await launchImageLibrary();
            if (result.didCancel) {
              return null;
            }
            setPhoto({
              ...photo,
              asset : result.assets[0],
              set : true,
              uri : result.assets[0].uri
            })
          },
        },
        {
          text: '카메라로 찍기',
          onPress: async () => {
            const result = await launchCamera({
              mediaType: 'photo',
              cameraType: 'back',
            });
            if (result.didCancel) {
              return null;
            }
            setPhoto({
              asset : result.assets[0],
              set : true,
              uri : result.assets[0].uri
            })
          },
        },
      ],
      { cancelable: false },
    );
  };
  return (
    <View style={styles.photoPickWrapper}>
      <TouchableOpacity onPress={onClick} style={styles.photoPickTouchable}>
        <Image source={PhotoIcon} style={styles.photoPickImage} />
      </TouchableOpacity>
    </View>
  );
}
