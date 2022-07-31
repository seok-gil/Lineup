import React, {useState} from 'react';

import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {ButtonBig} from '../../Components';

import styles from './FeedRegist.styles';
import {globalButtonStyle, globalButtonTextStyle} from '../../Styles';

export function FeedRegist({navigation}) {
  const [feed, setFeed] = useState('');

  const onChange = e => {
    const {text} = e.nativeEvent;
    setFeed(text);
  };

  const onPress = () => {
    navigation.navigate('CompetitionResult')
    console.log("POST API")
  }
  return (
    <SafeAreaView style={styles.feedRegistWrapper}>
      <View style={styles.feedInnerWrapper}>
        <View style={styles.feedRegistTextWrapper}>
          <Text style={styles.feedRegistLabel}>내용</Text>
          <TextInput
            multiline={true}
            style={styles.feedRegistTextInput}
            value={feed}
            placeholder={'어떤 말을 남기고 싶으신가요?'}
            placeholderTextColor="#C9C9C9"
            onChange={e => onChange('search', e)}
            onSubmitEditing={() => searchRef.current.focus()}
          />
        </View>
        <TouchableOpacity
          style={styles.feedRegistButton}
          onPress={() => onPress()}>
          <Text style={styles.feedRegistButtonText}> 확인 </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
