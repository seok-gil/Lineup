import React, {Component, useState} from 'react'
import {
    View,
    Image,
    Text,
    Alert,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import {PhotoPick, ImagePush} from '../../../Components'
import {DefaultProfileImage} from '../../../Assets/Images'

export function CaptureForm({playerPhoto, setPlayerPhoto, setMount}) {
    return (
        <View style={{flexDirection: 'column'}}>
            <Image source={{uri: playerPhoto.uri}} />
            <PhotoPick
                text="선수 이미지"
                photo={playerPhoto}
                setPhoto={setPlayerPhoto}
                setMount={setMount}
            />
        </View>
    )
}
