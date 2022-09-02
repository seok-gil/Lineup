import React from 'react'
import {View, Text} from 'react-native'
import {Time} from '../../Components'

import styles from './PlayerCard.styles'
const PlayerCard = ({record}) => {
    if (!record) return <View />
    return (
        <View key={'record'} style={styles.playerCardWrapper}>
            <Text style={styles.playerCardInfo}>
                {record.eventName} {record.detailName}{' '}
                {record.ranking ? `${record.ranking}위` : ''}
            </Text>
            <Text style={styles.playerCardDate}>
                <Time time={record.startDate} separator="-" /> ~{' '}
                <Time time={record.endDate} separator="-" />
            </Text>
        </View>
    )
}

export default PlayerCard
