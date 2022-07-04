import React, {useRef} from 'react';
import {Button, View, TextInput, Image} from 'react-native';

import SearchIcon from '../../Assets/Images/SearchIcon.png';
import styles from './SearchInput.styles';

function SearchInput({inputs, setInputs}) {
  const searchRef = useRef();

  const onChange = (keyvalue, e) => {
    const {text} = e.nativeEvent;
    setInputs({
      ...inputs,
      [keyvalue]: text,
    });
  };

  return (
    <View style={styles.searchInputWrapper}>
      <Image source={SearchIcon} style={styles.searchInputIcon} />
      <TextInput
        value={inputs.search}
        placeholder={'검색'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onChange('search', e)}
        onSubmitEditing={() => searchRef.current.focus()}
      />
    </View>
  );
}

export default SearchInput;
