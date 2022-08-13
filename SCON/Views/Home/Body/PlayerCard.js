import React, {useState} from 'react'
import {Text, TouchableOpacity, Image} from 'react-native'

import styles from './PlayerCard.styles'
import {AddIcon, MyBadgeIcon} from '../../../Assets/Icons'

function PlayerCard({data, navigation, item, role, index}) {
  if (!item) return null;
  if (index == 0 && role == 'ROLE_PLAYER') { // Myplayer
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Player', {playerId: item.playerId})}
        style={[styles.cardWrapper, styles.playerMyCardWrapper]}>
        <Image source={MyBadgeIcon} style={styles.myBadgeIcon} />
        <Image source={{uri: data.profilePic}} style={styles.playerCardImage} />
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.subText}>{item.sport}</Text>
        <Text style={styles.subText}>{item.belong}</Text>
      </TouchableOpacity>
    )
  } else if (item.playerId != null) {
    // Follow Player
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Player', {playerId: item.playerId})}
        style={[styles.cardWrapper, styles.playerCardWrapper]}>
        <Image
          source={{uri: item.profilePic}}
          style={styles.playerCardImage}
        />
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.subText}>{item.sport}</Text>
        <Text style={styles.subText}>{item.belong}</Text>
      </TouchableOpacity>
    )
  } else if (item.playerId == null) {
    // None Player
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('SearchScreen')}
        style={[styles.cardWrapper, styles.emptyCardWrapper]}>
        <Image source={AddIcon} style={styles.emptyCardImage} />
      </TouchableOpacity>
    )
  }
}

export default PlayerCard
