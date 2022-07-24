import React, {useEffect, useState} from 'react';
import {ApiFetchOne} from '../../Components/API/ApiFetch';
import {View, Image, TextInput} from 'react-native';
import {DefaultProfileImage} from '../../../Assets/Images';

export function CommentRegist() {
  const [comment, setComment] = useState('');
  return (
    <View style={{flexDirection: 'row'}}>
      <Image source={DefaultProfileImage} />
      <TextInput
        value={comment}
        placeholder={'댓글 쓰기'}
        placeholderTextColor="#C9C9C9"
        onChangeText={text => setComment(text)}
      />
    </View>
  );
}
