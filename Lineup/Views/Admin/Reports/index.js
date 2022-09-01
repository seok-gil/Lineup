import React, {useEffect, useState} from 'react'
import {FlatList, SafeAreaView} from 'react-native'
import {ApiFetch} from '../../../Components/API/ApiFetch'
import {ReportOne} from './ReportOne'
import styles from './Report.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function Reports({navigation}) {
  const [data, setData] = useState()
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(100)
  const [mount, setMount] = useState(new Date())
  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'GET',
          url: `/admin/reports?page=${page}&size=${size}`,
          headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + thing,
          },
          body: null,
        }).then(thing => {
          if (thing == 401) {
            navigation.navigate('RefreshTokenModal', {navigation : navigation})
          }
          else setData(thing.content);
        })
      })
  }, [size, mount])


  const onEndReached = () => {
    setSize(size + 5)
  }
  if (!data) return <SafeAreaView />
  return (
    <SafeAreaView style={styles.reportWrapper}>
      <FlatList
        data={data}
        snapToAlignment="start"
        decelerationRate="fast"
        renderItem={({item, index}) => (
          <ReportOne
            key={`report-${index}`}
            data={item}
            setMount={setMount}
            navigation={navigation}
          />
        )}
        // onScroll={onScroll}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}
