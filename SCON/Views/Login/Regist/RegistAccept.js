import React, {useState, useEffect} from 'react'
import {SafeAreaView, TouchableOpacity, View, Text} from 'react-native'
// import DefaultProfile from '../../Assets/Images/ProfileDefault.png'
import CheckBox from '@react-native-community/checkbox'
import styles from './RegistAccept.styles'

export function RegistAccept({navigation}) {
  const [accept, setAccept] = useState({
    all: false,
    service: false,
    privacy: false,
  })
  const onClick = key => {
    var temp = accept
    if (key != 'all') {
      temp[key] = !accept[key]
      if (temp.service && temp.privacy) {
        temp['all'] = true
      }
    } else if (key == 'all') {
      temp = {
        all: !accept['all'],
        service: !accept['all'],
        privacy: !accept['all'],
      }
    }
    setAccept(temp)
  }

  const onButton = () => {
    if (accept.service && accept.privacy)
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
              value={accept.all}
              boxType="square"
              onValueChange={() => onClick('all')}
              style={styles.checkbox}
            />
            <Text style={styles.checkAllText}>모두 확인, 동의합니다.</Text>
          </View>
          <View style={styles.checkWrapperSmall}>
            <CheckBox
              value={accept.service}
              boxType="square"
              onValueChange={() => onClick('service')}
              style={styles.checkbox}
            />
            <Text style={styles.checkText}>(필수)서비스 이용약관</Text>
          </View>
          <View style={styles.checkWrapperSmall}>
            <CheckBox
              value={accept.privacy}
              boxType="square"
              onValueChange={() => onClick('privacy')}
              style={styles.checkbox}
            />
            <Text style={styles.checkText}>
              (필수)개인정보 수집 및 이용동의
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => onButton()}
          style={ styles.loginButton}>
          <Text style={styles.loginButtonText}>다음</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
