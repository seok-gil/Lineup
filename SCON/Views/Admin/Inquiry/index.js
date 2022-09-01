import React, { useEffect, useState } from 'react'
import { SafeAreaView, FlatList } from 'react-native'
import { InquiryOne } from './InquiryOne'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ApiFetch } from '../../../Components'
import { useIsFocused } from '@react-navigation/native'
import styles from './Inquiry.styles'

export function Inquiry({ navigation }) {
  const isFocused = useIsFocused()
  const [data, setData] = useState([])
  const [mount, setMount] = useState()
  const [size, setSize] = useState(10)
  const [lastId, setLastId] = useState(100000)
  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/admin/inquiry?size=${size}&lastId=${lastId}`,
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
  }, [mount, isFocused, size])
  const onEndReached = () => {
    setSize(size + 2)
  }
  return (
    <SafeAreaView style={styles.inquiryWrapper}>
      <FlatList
        data={data}
        snapToAlignment="start"
        decelerationRate="fast"
        renderItem={({ item, index }) => (
          <InquiryOne
            key={`admin-inquiry-${index}`}
            data={item}
            navigation={navigation}
            setMount={setMount}
          />
        )}
        onEndReached={e => onEndReached(e)}
        onEndReachedThreshold={1}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}
