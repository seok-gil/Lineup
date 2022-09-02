import React, {useState, useEffect} from 'react'
import {FlatList, Text, View} from 'react-native'
import InquiryListElement from './InquiryListElement'
import {ApiFetch} from '../../../Components/'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './InquiryListScreen.styles'
import {DeniedIcon} from '../../../Assets/svgs'

export function InquiryListScreen() {
  const [data, setData] = useState([])
  const [size, setSize] = useState(10)
  const [lastId, setLastId] = useState(1000)

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/inquiry?size=${size}&lastId=${lastId}`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', {navigation : navigation})
        }
        else {
          setData(thing.content)
        }
      })
    })
  }, [size])

  if (!data || data.length === 0)
    return (
      <View style={styles.noInquiryList}>
        <DeniedIcon width={80} height={80} fill="#0E0E0E" />
        <Text style={styles.text}>문의 내역이 없습니다.</Text>
      </View>
    )
    const onEndReached = () => {
      setSize(size + 5)
    }
  return (
    <View style={styles.inquiryScreenWrapper}>
      {/* {data.map((item, index) => {
        return <InquiryListElement key={index} data={item} />
      })} */}
      <FlatList
          data={data}
          snapToAlignment="start"
          decelerationRate="fast"
          renderItem={({item, index}) => (
            <InquiryListElement
              key={`player-inquiry-${index}`}
              data={item}
            />
          )}
          onEndReached={e => onEndReached(e)}
          onEndReachedThreshold={0.9}
          showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}
