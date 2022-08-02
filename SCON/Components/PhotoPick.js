import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PhotoIcon } from '../Assets/Icons';

const DEFAULT_STYLE = {
  photoPickWrapper: {},
  photoPickImage: {},
  photoPickTouchable: {},
};

export function PhotoPick({ text, setPhoto, styles = DEFAULT_STYLE }) {
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
            const localUri = result.assets[0].uri;
            const uriPath = localUri.split('//').pop();
            const imageName = localUri.split('/').pop();
            setPhoto('file://' + uriPath);
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
            const localUri = result.assets[0].uri;
            const uriPath = localUri.split('//').pop();
            const imageName = localUri.split('/').pop();
            setPhoto('file://' + uriPath);
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
