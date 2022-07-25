import React, {useEffect, useState} from 'react';
import {ApiFetchOne} from '../../../Components/API/ApiFetch';
import {TouchableOpacity, Text, View} from 'react-native';

import styles from './PlayerFollowButton.styles';

function PlayerFollowButton({data, navigation}) {
  const [follow, setFollow] = useState(data.isFollow);
  const buttonStyle =
    data.isMe & !data.isFollow ? styles.followedButton : styles.followButton;

  const buttonTextStyle =
    data.isMe & !data.isFollow ? styles.followedText : styles.followText;

  const buttonText = () => {
    if (!data.isMe) return '스토리 추가하기';
    else if (data.isFollow) return '나의 라인업 추가됨';
    else return '나의 라인업 추가하기';
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('StoryScreen')}
      style={buttonStyle}>
      <Text style={buttonTextStyle}>{buttonText()}</Text>
    </TouchableOpacity>
  );
}

export default PlayerFollowButton;
