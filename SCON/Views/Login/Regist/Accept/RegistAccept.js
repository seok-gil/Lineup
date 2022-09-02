import React, { useState, useEffect } from 'react'
import { SafeAreaView, TouchableOpacity, View, Text } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import styles from './RegistAccept.styles'
import { AcceptModal } from "./AcceptModal"

export function RegistAccept({ navigation }) {
  // const [all, setAll] = useState(false)
  const [service, setService] = useState(false)
  const [privacy, setPrivacy] = useState(false)
  const [serviceModal, setServiceModal] = useState(false)
  const [privacyModal, setPrivacyModal] = useState(false)
  
  // const onClick = key => {
  //   var temp = accept
  //   if (key != 'all') {
  //     temp[key] = !accept[key]
  //     if (temp.service && temp.privacy) {
  //       temp['all'] = true
  //     }
  //   } else if (key == 'all') {
  //     temp = {
  //       all: !accept['all'],
  //       service: !accept['all'],
  //       privacy: !accept['all'],
  //     }
  //   }
  //   setAccept(temp)
  // }
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
          {/* <View style={styles.checkWrapper}>
            <CheckBox
              value={accept.all}
              boxType="square"
              onValueChange={() => onClick('all')}
              style={styles.checkbox}
            />
            <Text style={styles.checkAllText}>모두 확인, 동의합니다.</Text>
          </View> */}
            <TouchableOpacity onPress={() => setServiceModal(true)} style={styles.checkWrapperSmall}>
            <CheckBox
              disabled={true}
              value={service}
              boxType="square"
              style={styles.checkbox}
            />
              <Text style={styles.checkText}>
                (필수)서비스 이용약관
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPrivacyModal(true)} style={styles.checkWrapperSmall}>
            <CheckBox
              value={privacy}
              disabled={true}
              boxType="square"
              style={styles.checkbox}
            />
              <Text style={styles.checkText}>
                (필수)개인정보 수집 및 이용동의
              </Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity
          disabled={!privacy || !service}
          onPress={() => onButton()}
          style={(privacy && service) ? styles.loginButton : styles.loginButtonNotAvailable}>
          <Text style={styles.loginButtonText}>다음</Text>
        </TouchableOpacity>
        <AcceptModal modal={serviceModal} setModal={setServiceModal} value={service} setValue={setService} accept={'service'}/>
        <AcceptModal modal={privacyModal} setModal={setPrivacyModal} value={privacy} setValue={setPrivacy} accept={'privacy'}/>
      </View>
    </SafeAreaView>
  )
}
