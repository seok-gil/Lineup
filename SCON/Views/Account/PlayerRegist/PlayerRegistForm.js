import React, {useState} from 'react'
import {
    View,
    Image,
    Text,
    Modal,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import {BirthForm} from './BirthForm'
import {GenderForm} from './GenderForm'
import {CaptureForm} from './CaptureForm'
import {PlayerRegistModal} from './PlayerRegistModal'
import {CheckSmallIcon} from '../../../Assets/Icons'
import {ApiPush} from './ApiPush'

export function PlayerRegistForm({navigation}) {
    const [modal, setModal] = useState(false)
    const [form, setForm] = useState({
        certificate: '',
        name: '',
        birth: '',
        gender: '',
        sport: '',
        belong: '',
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
        const {text} = e.nativeEvent
        setForm({
            ...form,
            [key]: text,
        })
        setValidate({
            ...validate,
            [key]: true,
        })
        if (
            validate.certificate &&
      validate.name &&
      validate.birth &&
      validate.gender &&
      validate.sport &&
      validate.belong
        )
            setButton(true)
    }
    const onSummit = async() => {
        ApiPush(playerPhoto, setPlayerPhoto, 'player-certificate',form, setForm)
    }
    return (
        <View style={{flexDirection: 'column'}}>
            <Text>운동선수 확인을 시작합니다.</Text>
            <Text>확인된 내용이 실제와 다르면 이용이 제한됩니다.</Text>
            <CaptureForm playerPhoto={playerPhoto} setPlayerPhoto={setPlayerPhoto} />
            <Text>이름</Text>
            <TextInput
                value={form.name}
                placeholder={'이름을 입력해주세요'}
                placeholderTextColor="#0E0E0E66"
                onChange={e => onInput('name', e)}
            />
            <BirthForm form={form} setForm={setForm} />
            <GenderForm form={form} setForm={setForm} />
            <Text>종목</Text>
            <TextInput
                value={form.sport}
                placeholder={'종목을 선택해주세요'}
                placeholderTextColor="#0E0E0E66"
                onChange={e => onInput('sport', e)}
            />
            <Image source={CheckSmallIcon} />
            <Text>소속</Text>
            <TextInput
                value={form.belong}
                placeholder={'소속명을 입력해주세요'}
                placeholderTextColor="#0E0E0E66"
                onChange={e => onInput('belong', e)}
            />
            <Image source={CheckSmallIcon} />
            <TouchableOpacity
                // disabled={!button}
                onPress={() => onSummit()}>
                <Text>{button ? '버튼' : 'NO'}</Text>
            </TouchableOpacity>
            <PlayerRegistModal
                modal={modal}
                setModal={setModal}
                navigation={navigation}
            />
        </View>
    )
}
