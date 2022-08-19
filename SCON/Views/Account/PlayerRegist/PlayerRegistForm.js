import React, { useState, useEffect } from 'react'
import {
    View,
    Image,
    Text,
    Modal,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import { BirthForm } from './BirthForm'
import { GenderForm } from './GenderForm'
import { CaptureForm } from './CaptureForm'
import { SportForm } from './SportForm'
import { PlayerRegistModal } from './PlayerRegistModal'
import { CheckSmallIcon, PinnedIcon } from '../../../Assets/Icons'
import { ApiPush } from './ApiPush'

export function PlayerRegistForm({ navigation }) {
    const [mount, setMount] = useState()
    const [modal, setModal] = useState(false)
    const [form, setForm] = useState({
        certificate: null,
        name: null,
        birth: null,
        gender: null,
        sport: null,
        belong: null,
    })
    const [validate, setValidate] = useState({
        name: false,
        birth: false,
        gender: false,
        sport: false,
        belong: false,
    })
    const [playerPhoto, setPlayerPhoto] = useState({
        asset: '',
        set: false,
        uri: 'https://profile-scon.s3.ap-northeast-2.amazonaws.com/profile/default_profilePic.jpg',
    })

    const [button, setButton] = useState(false)
    const onInput = (key, e) => {
        const { text } = e.nativeEvent
        setForm({
            ...form,
            [key]: text,
        })
        // setValidate({
        //     ...validate,
        //     [key]: true,
        // })
        setMount(key)
    }

    useEffect(() => {
        var temp = validate
        if (form[mount] != null) {
            temp[mount] = true
        }
        else
            temp[mount] = false
        if (
            playerPhoto.asset &&
            temp.name &&
            temp.birth &&
            temp.gender &&
            temp.sport &&
            temp.belong
        ) {
            setButton(true)
        }
        else {
            setButton(false)
        }
        setValidate(temp)
        setMount('button')
    }, [mount])

    const onSummit = async () => {
        if (button)
            ApiPush(playerPhoto, setPlayerPhoto, 'player-certificate', form, setForm)
                .then(() => {
                    setModal(true)
                })
    }
    return (
        <View style={{ flexDirection: 'column' }}>
            <Text>운동선수 확인을 시작합니다.</Text>
            <Text>확인된 내용이 실제와 다르면 이용이 제한됩니다.</Text>
            <CaptureForm setMount={setMount} playerPhoto={playerPhoto} setPlayerPhoto={setPlayerPhoto} />
            <Text>이름</Text>
            <TextInput
                value={form.name}
                placeholder={'이름을 입력해주세요'}
                placeholderTextColor="#0E0E0E66"
                onChange={e => onInput('name', e)}
            />
            <BirthForm form={form} setForm={setForm} setMount={setMount} />
            <Image source={validate.birth ? CheckSmallIcon : PinnedIcon} />
            <GenderForm form={form} setForm={setForm} setMount={setMount} />
            <Image source={validate.gender ? CheckSmallIcon : PinnedIcon} />
            <SportForm form={form} setForm={setForm} setMount={setMount} />
            <Image source={validate.sport ? CheckSmallIcon : PinnedIcon} />
            <Text>소속</Text>
            <TextInput
                value={form.belong}
                placeholder={'소속명을 입력해주세요'}
                placeholderTextColor="#0E0E0E66"
                onChange={e => onInput('belong', e)}
            />
            <Image source={validate.belong ? CheckSmallIcon : PinnedIcon} />
            <TouchableOpacity
                onPress={() => onSummit()}>
                <Text>버튼</Text>
            </TouchableOpacity>
            <PlayerRegistModal
                modal={modal}
                setModal={setModal}
                navigation={navigation}
            />
        </View>
    )
}
