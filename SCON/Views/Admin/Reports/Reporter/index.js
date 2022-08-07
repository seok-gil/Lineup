import React, {useEffect, useState} from 'react'
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import {ApiFetch} from '../../../../Components/API/ApiFetch'
import {ReporterOne} from './ReporterOne'

import styles from './Reporter.styles'
import AsyncStorage from '@react-native-community/async-storage'

export function Reporter({navigation, route}) {
  const [data, setData] = useState([])
  useEffect(() => {
    AsyncStorage.getItem("accessToken")
      .then((thing) => {
        ApiFetch({
          method: 'GET',
          url: `/admin/reports/{commentId}/reporters`,
          headers: { 
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + thing,
          },
          body: null,
        }).then(thing => {
          setData(thing);
        })
  })
  }, []);

  if (!data) return <SafeAreaView />
  return (
    <SafeAreaView style={styles.reporterWrapper}>
      {data.map((item, index) => {
        return <ReporterOne data={item} key={`report-${index}`} />
      })}
    </SafeAreaView>
  )
}
