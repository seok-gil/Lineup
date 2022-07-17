import React, {useState} from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';

import styles from './PlayerCard.styles';
import {AddIcon} from '../../../Assets/Icons';

function PlayerCard({item}) {
  if (!item) return null;
  if (item.playerId && !item.profilePic)
    // Myplayer
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Player', {playerId: item.playerId})}
        style={[styles.cardWrapper, styles.playerMyCardWrapper]}>
        <Image
          source={{uri: item.profilePic}} //TODO player url
          style={styles.playerCardImage}
        />
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.subText}>{item.sport}</Text>
        <Text style={styles.subText}>{item.belong}</Text>
      </TouchableOpacity>
    );
  else if (item.playerId != null)
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Player', {playerId: item.playerId})}
        style={[styles.cardWrapper, styles.playerCardWrapper]}>
        <Image
          source={{uri: item.profilePic}} //TODO player url
          style={styles.playerCardImage}
        />
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.subText}>{item.sport}</Text>
        <Text style={styles.subText}>{item.belong}</Text>
      </TouchableOpacity>
    );
  else if (item.playerId == null) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('SearchScreen')}
        style={[styles.cardWrapper, styles.emptyCardWrapper]}>
        <Image source={AddIcon} style={styles.emptyCardImage} />
      </TouchableOpacity>
    );
  }
}

export default PlayerCard;
