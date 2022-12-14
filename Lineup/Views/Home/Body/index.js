import React, {useState, useEffect} from 'react'
import {View, Text} from 'react-native'

import {GoPlayer} from './GoPlayer'
import {CardList} from './CardList'

import styles from './Body.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function Body({data, navigation}) {
  if (!data) return <View />

  var [role, setRole] = useState('ROLE_MEMBER')
  const [goPlayer, setgoPlayer] = useState(data.homeCheck)

  useEffect(() => {
    AsyncStorage.getItem('role').then(role => {
      setRole(role)
    })
  }, [])
  return (
    <View style={styles.bodyWrapper}>
      {role === 'ROLE_MEMBER' && goPlayer === true && (
        <GoPlayer navigation={navigation} setgoPlayer={setgoPlayer} />
      )}
      <View style={styles.bodyTextWrapper}>
        {role === 'ROLE_MEMBER' ? (
          <Text style={styles.bodyTextLarge}>
            <Text style={styles.textImportant}>나만의 라인업</Text>을{'\n'}
            추가해보세요!
          </Text>
        ) : (
          <Text style={[styles.bodyTextLarge, styles.bodyTextPlayer]}>
            당신을 <Text style={styles.textImportant}>응원합니다!</Text>
          </Text>
        )}
        <Text style={styles.bodyTextSmall}>
          {role === 'ROLE_MEMBER'
            ? '최대 3명까지 추가할 수 있어요'
            : '본인 계정관리는 물론 선수 3명을 팔로우\n할 수 있습니다'}
        </Text>
      </View>
      <CardList data={data} navigation={navigation} role={role} />
    </View>
  )
}
