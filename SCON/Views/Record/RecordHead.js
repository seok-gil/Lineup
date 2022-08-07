import React from 'react'
import {View, Image, Text} from 'react-native'

import {
    GoldMedalImage,
    SilverMedalImage,
    BronzeMedalImage,
} from '../../Assets/Images'

import styles from './RecordHead.styles'

function RecordHead({data}) {
    const gold = data.filter(gold => gold.ranking == 1).length
    const silver = data.filter(silver => silver.ranking == 2).length
    const bronze = data.filter(bronze => bronze.ranking == 3).length

    return (
        <View style={styles.recordHeadWrapper}>
            <Text style={styles.recordHeadTitle}>선수 전적</Text>
            <View style={styles.recordHeadMedals}>
                <Image source={GoldMedalImage} style={styles.medalImage}></Image>
                <Text style={styles.medalNum}>{gold}</Text>
                <Image source={SilverMedalImage} style={styles.medalImage}></Image>
                <Text style={styles.medalNum}>{silver}</Text>
                <Image source={BronzeMedalImage} style={styles.medalImage}></Image>
                <Text style={styles.medalNum}>{bronze}</Text>
            </View>
        </View>
    )
}

export default RecordHead
