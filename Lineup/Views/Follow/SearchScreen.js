import React, {useState, useRef} from 'react'

import {View, TouchableOpacity, Text, Image, TextInput} from 'react-native'

import {SearchIcon} from '../../Assets/svgs'
import styles from './SearchScreen.styles'

export function SearchId({data, navigation}) {
  if (!data) {
    return <View />
  }
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('FollowPage', {userId: data.memberId})
      }>
      <View style={styles.viewPlayerWrapper}>
        <Image source={{uri: data.profilePic}} style={styles.viewPlayerImage} />
        <View style={styles.viewPlayerInfo}>
          <Text
            style={styles.playerName}
            numberOfLines={1}
            ellipsizeMode="tail">
            {data.nickname}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export function SearchInput() {
  const searchRef = useRef()
  const [inputs, setInputs] = useState({
    search: '',
  })
  const onChange = (keyvalue, e) => {
    const {text} = e.nativeEvent
    setInputs({
      ...inputs,
      [keyvalue]: text,
    })
  }

  return (
    <View style={styles.searchInputWrapper}>
      <SearchIcon
        fill="#17D3F0"
        width={22}
        height={22}
        style={styles.searchInputIcon}
      />
      <TextInput
        value={inputs.search}
        placeholder={'검색'}
        placeholderTextColor="#0E0E0E66"
        onChange={e => onChange('search', e)}
        onSubmitEditing={() => searchRef.current.focus()}
      />
    </View>
  )
}
