import React, {useEffect, useState} from 'react';
import { ApiFetchOne } from '../../Components/API/ApiFetch';

import {
  View,
  Image,
  TextInput,
} from 'react-native';

import {DefaultProfileImage} from '../../../Assets/Images';

export function CommentRegist({value}) {
	const [name, setName] = useState('');
	return (
	  <View style={{flexDirection: 'row'}}>
		<Image source={DefaultProfileImage} />
		<TextInput
		  value={value}
		  placeholder={'댓글 쓰기'}
		  placeholderTextColor="#C5C8CE"
		  onChangeText={text => setName(text)}
		/>
	  </View>
	);
  }