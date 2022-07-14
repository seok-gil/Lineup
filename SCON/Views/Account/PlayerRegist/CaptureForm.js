import React, {Component, useState} from 'react';
import {
  View,
  Image,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import { PhotoPick} from '../../../Components'
import {DefaultProfileImage} from '../../../Assets/Images';

export function PhotoPick({text, setPhoto}) {
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
            console.log(result);
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
      {cancelable: false},
    );
  };
  return (
    <View>
      <TouchableOpacity onPress={onClick}>
        <Text>선수 등록 캡쳐 화면 업로드</Text>
      </TouchableOpacity>
    </View>
  );
}

export function CaptureForm({form, setForm}) {
  const [playerPhoto, setPlayerPhoto] = useState(DefaultProfileImage);
  return (
    <View style={{flexDirection: 'column'}}>
      <Image source={DefaultProfileImage} />
      <PhotoPick text="선수 이미지" setPhoto={setPlayerPhoto} />
    </View>
  );
}
