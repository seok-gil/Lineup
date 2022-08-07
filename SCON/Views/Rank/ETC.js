import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'

import styles from './ETC.styles'
import {HeartSFilledIcon} from '../../Assets/Icons'
import {DefaultProfileImage} from '../../Assets/Images'

function ETC({player, index, navigation}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Player', {playerId: [player.playerId]})
      }
      style={styles.etcWrapper}>
      <Text style={styles.index}>{index + 4}</Text>
      <Image source={{uri: player.profilePic}} style={styles.profileImage} />
      <View style={styles.profileWrapper}>
        <View>
          <View style={styles.profileInnerWrapper}>
            <Text style={styles.name}>{player.name}</Text>
            <Text>({player.sport})</Text>
          </View>
          <Text style={styles.from}>{player.belong}</Text>
        </View>
        <View style={styles.likeCount}>
          <Image source={HeartSFilledIcon} style={styles.heart} />
          <Text style={styles.likes}>{player.followerCnt} </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ETC
