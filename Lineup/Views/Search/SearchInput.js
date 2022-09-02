import React, {useRef} from 'react'
import {View, TextInput} from 'react-native'

import styles from './SearchInput.styles'
import {SearchIcon} from '../../Assets/svgs'

function SearchInput({inputs, setInputs}) {
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
        hitSlop={{ top: 100, bottom: 100, left: 1000, right: 1000 }}  
        value={inputs.search}
        placeholder={'검색'}
        placeholderTextColor="#0E0E0E66"
        onChange={e => onChange('search', e)}
      />
    </View>
  )
}

export default SearchInput
