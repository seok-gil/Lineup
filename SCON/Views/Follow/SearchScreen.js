import React, {Component, useState, useRef} from 'react';

import { View, TouchableOpacity, StyleSheet, Text, Image, TextInput, SafeAreaView} from 'react-native';

import {SearchIcon} from '../../Assets/Icons';
import {DefaultProfileImage} from '../../Assets/Images';

export function SearchId({data, navigation}) {
  if (!data) return <View />
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('FollowPage', {names: ['Brent', 'Satya', 'Michaś']})
      }>
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri:data.profilePic}} style={styles.image} />
        <View style={{flexDirection: 'column'}}>
          <Text> {data.nickname}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export function SearchInput() {
  const searchRef = useRef();
  const [inputs, setInputs] = useState({
    search: '',
  });
  const onChange = (keyvalue, e) => {
    const {text} = e.nativeEvent;
    setInputs({
      ...inputs,
      [keyvalue]: text,
    });
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <Image source={SearchIcon} />
      <TextInput
        value={inputs.search}
        placeholder={'검색'}
        placeholderTextColor="#0E0E0E66"
        onChange={e => onChange('search', e)}
        onSubmitEditing={() => searchRef.current.focus()}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  image: {
    width: '10%',
    height: '100%',
    resizeMode: 'contain',
  },
});
