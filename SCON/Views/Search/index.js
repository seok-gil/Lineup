import React, {useState} from 'react';
import {View} from 'react-native';

import SearchInput from './SearchInput';
import SearchID from './SearchID';

import styles from './SearchScreen.styles';

export function SearchScreen({navigation,data}) {
  console.log(data)
  const Data = require('../../Assets/Data/Search.json').player;
  const [inputs, setInputs] = useState({
    search: '',
  });
  return (
    <View style={styles.searchScreenWrapper}>
      <View style={styles.searchScreenTop}>
        <SearchInput inputs={inputs} setInputs={setInputs} />
      </View>
      <SearchID key={`searchID`}inputs={inputs} navigation={navigation} />
    </View>
  );
}
