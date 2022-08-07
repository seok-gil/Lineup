import React, {useState, useEffect} from 'react'
import {View, ScrollView, SafeAreaView, FlatList} from 'react-native'

import RankMedal from './RankMedal'
import ETC from './ETC'
import {ApiFetch} from '../../Components/API/ApiFetch'
import {player} from '../../Assets/Data/Rank.json'
import styles from './RankBody.styles'
import AsyncStorage from '@react-native-community/async-storage'

function RankBody({navigation, route}) {
  var mod = route.params.mode
  const [page, setPage] = useState(0)
  const [size, setSize] = useState(10)
  const [data, setData] = useState()
  const [nextFeed, setNextFeed] = useState(10)

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: `/rank/${mod}?page=${page}&size=${size}`,
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(data => {
        setData(data.content)
      })
    })
  }, [])

  const onEndReached = () => {
    setNextFeed(nextFeed + 5)
  }

  if (!data) return <SafeAreaView />
  return (
    <SafeAreaView style={styles.rankBodyWrapper}>
      <View style={styles.rankMedalWrapper}>
        <RankMedal player={data[0]} rank={2} navigation={navigation} />
        <RankMedal player={data[0]} rank={1} navigation={navigation} />
        <RankMedal player={data[0]} rank={3} navigation={navigation} />
      </View>
      <FlatList
        data={data}
        snapToAlignment="start"
        decelerationRate="fast"
        renderItem={({item, index}) => (
          <ETC
            player={item}
            index={index}
            key={`rankETC${index}`}
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

export default RankBody
