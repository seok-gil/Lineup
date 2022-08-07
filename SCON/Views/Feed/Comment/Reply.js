import React, {useEffect, useState} from 'react'

import {View, Text, Image, StyleSheet} from 'react-native'

import {ViewMore, ReplyIcon} from '../../../Assets/Icons/'
import {TimeRelative} from '../../../Components/Time'

export function Reply({reply}) {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={{flexDirection: 'row'}}>
        <Image source={ReplyIcon} />
        <Image source={{uri: reply.writer.profilePic}} style={styles.image} />
        <Text>{reply.writer.nick}</Text>
        <Text>
          {' '}
          <TimeRelative time={reply.createDate} />{' '}
        </Text>
        <Image source={ViewMore} />
      </View>
      <Text>{reply.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '10%',
    height: '100%',
    resizeMode: 'contain',
  },
})
