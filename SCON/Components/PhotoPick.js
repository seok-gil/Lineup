import React from 'react'
import { View, Alert, TouchableOpacity, Image } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { PhotoIcon } from '../Assets/Icons'


const DEFAULT_STYLE = {
    photoPickWrapper: {},
    photoPickImage: {},
    photoPickTouchable: {},
}

export function PhotoPick({ text, photo, setPhoto, setMount, styles = DEFAULT_STYLE }) {
    var flag = true
    const onClick = () => {
        if (flag) {
        flag = false
        Alert.alert(
            text,
            '',
            [
                {
                    text: '앨범에서 선택',
                    onPress: async () => {
                        const result = await launchImageLibrary()
                        flag = true;
                        if (result.didCancel) {
                            return null
                        }
                        setPhoto({
                            ...photo,
                            asset : result.assets[0],
                            set : true,
                            uri : result.assets[0].uri
                        })
                    },
                },
                {
                    text: '카메라로 찍기',
                    onPress: async () => {
                        const result = await launchCamera({
                            mediaType: 'photo',
                            cameraType: 'back',
                        })
                        flag = true;
                        if (result.didCancel) {
                            return null
                        }
                        setPhoto({
                            asset : result.assets[0],
                            set : true,
                            uri : result.assets[0].uri
                        })
                    },
                },
            ],
            { cancelable: false },
        )
        }
        setMount(new Date())
    }
    return (
        <View style={styles.photoPickWrapper}>
            <TouchableOpacity onPress={onClick} style={styles.photoPickTouchable}>
                <Image source={PhotoIcon} style={styles.photoPickImage} />
            </TouchableOpacity>
        </View>
    )
}
