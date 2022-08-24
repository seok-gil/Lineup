import React, {useState, useEffect} from 'react'
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native'

import {BirthForm} from './BirthForm'
import {GenderForm} from './GenderForm'
import {CaptureForm} from './CaptureForm'
import {SportForm} from './SportForm'
import {PlayerRegistModal} from './PlayerRegistModal'
import {ApiPush} from './ApiPush'

import styles from './PlayerRegistForm.styles'

export function PlayerRegistForm({navigation}) {
  const [mount, setMount] = useState()
  const [modal, setModal] = useState(false)
  const [button, setButton] = useState(false)

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

  const onInput = (key, e) => {
    const {text} = e.nativeEvent
    setForm({
      ...form,
      [key]: text,
    })
    setMount(key)
  }

  useEffect(() => {
    var temp = validate
    if (form[mount] != null) {
      temp[mount] = true
    } else temp[mount] = false
    if (
      playerPhoto.asset &&
      temp.name &&
      temp.birth &&
      temp.gender &&
      temp.sport &&
      temp.belong
    ) {
      setButton(true)
    } else {
      setButton(false)
    }
    setValidate(temp)
    setMount('button')
  }, [mount])

  const onSummit = async () => {
    if (button)
      ApiPush(
        playerPhoto,
        setPlayerPhoto,
        'player-certificate',
        form,
        setForm,
      ).then(() => {
        setModal(true)
      })
    else
    navigation.navigate('ModalPage', {
      text: '입력란을 모두 입력해주세요',
    })
  }
  return (
    <View style={styles.registWrapper}>
      <View style={styles.registInner}>
        <View style={styles.registTop}>
          <Text style={styles.title}>{'운동선수 확인을\n시작합니다.'}</Text>
          <Text style={styles.desc}>
            확인된 내용이 실제와 다르면 이용이 제한됩니다.
          </Text>
          <CaptureForm
            setMount={setMount}
            playerPhoto={playerPhoto}
            setPlayerPhoto={setPlayerPhoto}
          />
          <Text style={styles.label}>이름</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              value={form.name}
              style={styles.input}
              placeholder={'이름을 입력해주세요'}
              placeholderTextColor="#0E0E0E66"
              onChange={e => onInput('name', e)}
            />
          </View>
          <BirthForm form={form} setForm={setForm} setMount={setMount} />
          <GenderForm form={form} setForm={setForm} setMount={setMount} />
          <SportForm form={form} setForm={setForm} setMount={setMount} />
          <Text style={styles.label}>소속</Text>
          <TextInput
            value={form.belong}
            style={styles.input}
            placeholder={'소속명을 입력해주세요'}
            placeholderTextColor="#0E0E0E66"
            onChange={e => onInput('belong', e)}
          />
        </View>
        <TouchableOpacity
          // disabled={!button}
          onPress={() => onSummit()}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>확인</Text>
        </TouchableOpacity>
      </View>
      <PlayerRegistModal
        modal={modal}
        setModal={setModal}
        navigation={navigation}
      />
    </View>
  )
}
