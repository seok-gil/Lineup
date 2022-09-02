import React, { useState, useEffect } from 'react'
import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import styles from './RegistAccept.styles'
import { AcceptModal } from "./AcceptModal"

export function RegistAccept({ navigation }) {
  const [all, setAll] = useState(false)
  const [service, setService] = useState(false)
  const [privacy, setPrivacy] = useState(false)
  const [serviceModal, setServiceModal] = useState(false)
  const [privacyModal, setPrivacyModal] = useState(false)

  const onClick = (key) => {
    if (key == 'all') {
      if (all) {
        setService(false)
        setPrivacy(false)
      }
      else {
        setService(true)
        setPrivacy(true)
      }
      setAll(!all)
    }
    else {
      var flag = false
      if (key == 'service') {
        if (!service && privacy)
          flag = true
        setService(!service)
      }
      else if (key == 'privacy') {
        if (!privacy && service)
          flag = true
        setPrivacy(!privacy)
      }
      setAll(flag)
    }
  }


  const onButton = () => {
    navigation.navigate('MakeId')
  }

  return (
    <SafeAreaView style={styles.registWrapper}>
      <View style={styles.registTop}>
        <Text style={styles.registTopText}>
          서비스를 이용하기 위해서 약관동의가 필요합니다.
        </Text>
      </View>
      <View style={styles.registMiddle}>
        <View style={styles.registMiddleTop}>
          <View style={styles.checkWrapper}>
            <CheckBox
              value={all}
              boxType="square"
              onValueChange={() => onClick('all')}
              style={styles.checkbox}
            />
            <Text style={styles.checkAllText}>모두 확인, 동의합니다.</Text>
          </View>
          <View style={styles.checkWrapperSmall}>
            <CheckBox
              value={service}
              boxType="square"
              style={styles.checkbox}
              onChange={() => onClick('service')}
            />
            <TouchableOpacity onPress={() => setServiceModal(true)} >
              <Text style={styles.checkText}>
                (필수)서비스 이용약관
              </Text>
            </TouchableOpacity>
          </View >
          <View style={styles.checkWrapperSmall}>
            <CheckBox
              value={privacy}
              boxType="square"
              style={styles.checkbox}
              onChange={() => onClick('privacy')}
            />
            <TouchableOpacity onPress={() => setPrivacyModal(true)} >
              <Text style={styles.checkText}>
                (필수)개인정보 수집 및 이용동의
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          disabled={!privacy || !service}
          onPress={() => onButton()}
          style={(privacy && service) ? styles.loginButton : styles.loginButtonNotAvailable}>
          <Text style={styles.loginButtonText}>다음</Text>
        </TouchableOpacity>
        <AcceptModal modal={serviceModal} setModal={setServiceModal} accept={'service'} />
        <AcceptModal modal={privacyModal} setModal={setPrivacyModal} accept={'privacy'} />
      </View>
    </SafeAreaView>
  )
}
