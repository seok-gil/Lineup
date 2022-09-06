import React from 'react'
import {Image, View, Text, TouchableOpacity} from 'react-native'

import {CrownIcon} from './Assets'
import {HeartFilledIcon} from '../../Assets/svgs'

import styles from './RankMedal.styles'


function RankMedal({player, rank, navigation}) {
  const isFirst = rank === 1 ? true : false
  const defaultProfile =  'https://profile-scon.s3.ap-northeast-2.amazonaws.com/profile/default_profilePic.jpg'
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Player', {name: player.name, playerId: player.playerId})}
      style={styles.rankMedalWrapper}>
      <View style={styles.profileWrapper}>
        {isFirst ? (
          <CrownIcon width={27} height={19} style={styles.crown} />
        ) : (
          <Text style={styles.rank}>{rank}</Text>
        )}
        <Image
          source={{uri: player ? player.profilePic : defaultProfile}}
          style={isFirst ? styles.rankFirstImage : styles.rankImage}
        />
      </View>
      <View style={styles.playerNameWrapper}>
        <Text style={styles.boldText}>{player ? player.name : ''}</Text>
        <Text style={styles.playerMajor}>({player ? player.sport : ''})</Text>
      </View>
      <Text style={styles.playerFrom}>소속</Text>
      <View style={styles.likes}>
        <HeartFilledIcon
          width={15}
          height={15}
          fill="#17D3F0"
          style={styles.heart}
        />
        <Text style={styles.boldText}>{player ? player.followerCnt : '0'}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default RankMedal
