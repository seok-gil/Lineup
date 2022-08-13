import React, {Component} from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {
    AcceptIcon,
    DownIcon,
    ListIcon,
    MegaphoneIcon,
    QnAIcon,
    ReportIcon,
} from '../../../Assets/Icons'
import styles from './AdminMypageTab.styles'

export function AdminMypageTab({navigation}) {
    return (
        <View style={styles.mypageTabWrapper}>
            <TouchableOpacity
                style={styles.mypageElement}
                onPress={() => navigation.navigate('RegistMemberTab')}>
                <View style={styles.elementLeft}>
                    <Image source={ListIcon} style={styles.elementIcon} />
                    <Text style={styles.elementText}>가입자목록</Text>
                </View>
                <Image source={DownIcon} style={styles.arrowIcon} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.mypageElement}
                onPress={() => navigation.navigate('AdminNotiTab')}>
                <View style={styles.elementLeft}>
                    <Image source={MegaphoneIcon} style={styles.elementIcon} />
                    <Text style={styles.elementText}>공지사항</Text>
                </View>
                <Image source={DownIcon} style={styles.arrowIcon} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.mypageElement}
                onPress={() => navigation.navigate('Report')}>
                <View style={styles.elementLeft}>
                    <Image source={ReportIcon} style={styles.elementIcon} />
                    <Text style={styles.elementText}>신고 접수</Text>
                </View>
                <Image source={DownIcon} style={styles.arrowIcon} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.mypageElement}
                onPress={() => navigation.navigate('RegistTab')}>
                <View style={styles.elementLeft}>
                    <Image source={AcceptIcon} style={styles.elementIcon} />
                    <Text style={styles.elementText}>선수 인증 승인</Text>
                </View>
                <Image source={DownIcon} style={styles.arrowIcon} />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.mypageElement}
                onPress={() => navigation.navigate('Inquiry')}>
                <View style={styles.elementLeft}>
                    <Image source={QnAIcon} style={styles.elementIcon} />
                    <Text style={styles.elementText}>문의 내역</Text>
                </View>
                <Image source={DownIcon} style={styles.arrowIcon} />
            </TouchableOpacity>
        </View>
    )
}
