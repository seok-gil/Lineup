import React, {useState, useEffect} from 'react'
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
import {SportForm} from './SportForm'
import {PlayerRegistModal} from './PlayerRegistModal'
import {CheckSmallIcon, PinnedIcon} from '../../../Assets/Icons'
import {ApiPush} from './ApiPush'

export function PlayerRegistForm({navigation}) {
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
  setValidate({
    ...validate,
    [key]: true,
  })

  const [button, setButton] = useState(false)
  const onInput = (key, e) => {
    const {text} = e.nativeEvent
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
          <BirthForm form={form} setForm={setForm} validate={validate} />
          <GenderForm form={form} setForm={setForm} validate={validate} />
          <Text style={styles.label}>종목</Text>
          <TextInput
            value={form.sport}
            style={styles.input}
            placeholder={'종목을 선택해주세요'}
            placeholderTextColor="#0E0E0E66"
            onChange={e => onInput('sport', e)}
          />
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
          style={button ? styles.loginButton : styles.loginButtonNotAvailable}>
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
