import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import { LineupLogoImage } from '../../../Assets/Images'
import { DefaultProfileImage } from '../../../Assets/Images'
import styles from './Head.styles'

export function Head({ data }) {
    if (!data) return <View />
    return (
        <View>
            <View style={styles.headerWrapper}>
                <View style={styles.alignment} >
                    <View style={styles.imageWrapper}>
                        <Image source={{ LineupLogoImage }} style={styles.logo} />
                    </View>
                </View>
            </View>
            <View style={styles.viewWrapper}>
                <Image source={DefaultProfileImage} style={styles.image} />
                <View style={styles.viewProfileInfo}>
                    <Text style={styles.nameText} numberOfLines={1} ellipsizeMode="tail">
                        관리자
                    </Text>
                    <Text style={styles.emailText} numberOfLines={1} ellipsizeMode="tail">
                        {data.adminEmail}
                    </Text>
                </View>
            </View>
        </View>
    )
}
