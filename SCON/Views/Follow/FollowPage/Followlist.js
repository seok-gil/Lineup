import React, {Component, useState, useEffect} from 'react'

import {View, Text, Image} from 'react-native'

import styles from './Followlist.styles'

export function Followlist({data}) {
  const type = {'all' : '전체', 'day' : '일간' , 'month' : '월간' , 'week' : '주간'}
  if (!data) return <View />
  const [rank, setRank] = useState({
    type: 'ALL',
    rank: '0',
  })
  useEffect(() => {
    const ranks = data.rank
    const arr = []
    for (var i in ranks) arr.push([i, ranks[i]])
    arr.sort(function (a, b) {
      return a[1] - b[1]
    })
    if (arr[0]) {
      setRank({
        type: arr[0][0],
        rank: arr[0][1],
      })
    }
  }, [])
  return (
    <View style={styles.followListWrapper}>
      <View style={styles.followListLeft}>
        <Image source={{uri: data.profilePic}} style={styles.profilePic} />
        <View style={styles.namespace}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.belong}>
            {data.sport}/{data.belong}
          </Text>
        </View>
      </View>
      <View style={styles.followListRight}>
        <View style={styles.recordWrapper}>
          <Text style={styles.count}>{data.recodeCnt}</Text>
          <Text style={styles.tag}>전적</Text>
        </View>
        <View style={styles.recordWrapper}>
          <Text style={styles.count}>{data.followerCnt}</Text>
          <Text style={styles.tag}>팬</Text>
        </View>
        <View style={styles.recordWrapper}>
          <Text style={styles.count}>{rank.rank}위</Text>
          <Text style={styles.tag}>{type[rank.type]}</Text>
        </View>
      </View>
    </View>
  )
}
