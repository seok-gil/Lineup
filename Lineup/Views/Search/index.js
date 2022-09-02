import React, { useState, useEffect } from 'react'
import { View, SafeAreaView } from 'react-native'

import SearchInput from './SearchInput'
import SearchID from './SearchID'

import styles from './SearchScreen.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ApiFetch } from '../../Components/API/ApiFetch'

export function SearchScreen({ navigation}) {
  const [data, setData] = useState()
  const [inputs, setInputs] = useState({
    search: '',
    page: 0,
    size: 3,
  })

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/search-player?kw=${inputs.search}&page=${inputs.page}&size=${inputs.size}`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', { navigation: navigation })
        }
        else
          setData(thing.content)
      })
    })
  }, [inputs])

  if (!data) return <SafeAreaView />
  return (
    <SafeAreaView style={styles.searchScreenWrapper}>
      <View style={styles.searchScreenTop}>
        <SearchInput inputs={inputs} setInputs={setInputs} />
      </View>
      <SearchID
        data={data}
        key={'searchID'}
        inputs={inputs}
        setInputs={setInputs}
        navigation={navigation}
      />
    </SafeAreaView>
  )
}
