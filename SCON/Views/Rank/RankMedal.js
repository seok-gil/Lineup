import React from 'react'
import {Image, View, Text, TouchableOpacity} from 'react-native'
import {CrownIcon, HeartSFilledIcon} from '../../Assets/Icons'

import {DefaultProfileImage} from '../../Assets/Images'
import {globalTextStyle} from '../../Styles'
import styles from './RankMedal.styles'

function RankMedal({player, rank, navigation}) {
    const isFirst = rank === 1 ? true : false
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate('Player', {playerId: player.playerId})
            }
            style={styles.rankMedalWrapper}>
            <View style={styles.profileWrapper}>
                {isFirst ? (
                    <Image source={CrownIcon} style={styles.crown} />
                ) : (
                    <Text style={styles.rank}>{rank}</Text>
                )}
                <Image
                    source={{uri: player.profilePic}}
                    style={isFirst ? styles.rankFirstImage : styles.rankImage}
                />
            </View>
            <View style={styles.playerNameWrapper}>
                <Text style={styles.boldText}>{player.name}</Text>
                <Text style={styles.playerMajor}>({player.sport})</Text>
            </View>
            <Text style={styles.playerFrom}>소속</Text>
            <View style={styles.likes}>
                <Image source={HeartSFilledIcon} style={styles.heart} />
                <Text style={styles.boldText}>{player.followerCnt}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RankMedal
