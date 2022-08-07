import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Switch} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import {ApiFetch} from '../../Components/'

import styles from './SettingAlert.styles'

export function SettingAlertScreen({navigation}) {
  const [alert, setAlert] = useState({
    feedAlarm: true,
    commentAlarm: false,
  })

<<<<<<< HEAD
	useEffect(() => {
		AsyncStorage.getItem("accessToken")
			.then((thing) => {
				ApiFetch({
					method: 'GET',
					url: `/alarm-setting`,
					headers: {
						'content-type': 'application/json',
						'Authorization': 'Bearer ' + thing,
					},
					body: null,
				}).then(thing => {
					setAlert(thing)
				})
			})
	}, []);
=======
  const onClick = key => {
    const set = !alert[key]
    setAlert({
      ...alert,
      [key]: set,
    })
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'PUT',
        url: `/alarm-setting/${key.slice(0, -5)}`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      })
    })
  }
>>>>>>> origin

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: '/alarm-setting',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        console.log('GETAlert', thing)
        setAlert(thing)
      })
    })
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.switchWrapper}>
        <Text style={styles.labelText}>선수 피드 알림</Text>
        <Switch
          trackColor={{false: '#E6E6E6', true: '#17D3F0'}}
          thumbColor="#ffffff"
          ios_backgroundColor="#E6E6E6"
          onValueChange={() => onClick('feedAlarm')}
          value={alert.feedAlarm}
        />
      </View>
      <View style={styles.switchWrapper}>
        <Text style={styles.labelText}>댓글 알림</Text>
        <Switch
          trackColor={{false: '#E6E6E6', true: '#17D3F0'}}
          thumbColor="#ffffff"
          ios_backgroundColor="#E6E6E6"
          onValueChange={() => onClick('commentAlarm')}
          value={alert.commentAlarm}
        />
      </View>
    </View>
  )
}
