import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import validator from 'validator';

import { CheckSmallIcon } from '../../../Assets/Icons';
import { PasswordChangeModal } from './PasswordChangeModal';
import { PasswordApi } from "./PasswordApi"
export function PasswordChange({ navigation }) {
  const [form, setForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [validate, setValidate] = useState({
    oldPassword: true,
    newPassword: true,
    confirmPassword: true,
    button: false,
  });

  const [modal, setModal] = useState(false)
  const onInput = (key, e) => {
    const { text } = e.nativeEvent;
    const tempForm = form

    tempForm[key] = text
    setForm({
      ...form,
      [key]: text,
    });
    var tempVal = validate
    if (key == 'oldPassword') {
      tempVal.oldPassword = true
    }
    if (key == 'newPassword') {
      if (validator.isLength(text, 8, 12)) {
        tempVal.newPassword = true
      }
      else {
        tempVal.newPassword = false
      }
    }
    if (tempForm.newPassword.length == tempForm.confirmPassword.length)
      tempVal.confirmPassword = true
    else {
      tempVal.confirmPassword = false
    }
    if (tempVal.oldPassword && tempVal.confirmPassword && tempVal.newPassword) {
      tempVal.button = true
    }
    console.log(validate)
  };

  const onSummit = () => {
    if (PasswordApi({
      'password': form.oldPassword,
      'newPassword': form.newPassword
    }))
      setModal(true)
    else
      setValidate({
        ...validate,
        ['oldPassword'] : false,
        ['buttonn'] : false
      })
  }
  return (
    <View style={{ flexDirection: 'column' }}>
      <Text>새로운 비밀번호로 변경해주세요.</Text>
      <Text>8~16자의 영문, 숫자, 특수기호를 조합하여 사용.</Text>
      <TextInput
        value={form.oldPassword}
        placeholder={'현재 비밀번호'}
        placeholderTextColor="#0E0E0E66"
        onChange={e => onInput('oldPassword', e)}
      />
      {validate.oldPassword == false ? (
        <>
          <Text>현재 비밀번호와 일치하지 않습니다.</Text>
          {/* <Image source={CheckSmallIcon} /> */}
        </>
      ) : (
        <Image source={CheckSmallIcon} />
      )}
      <TextInput
        value={form.newPassword}
        placeholder={'신규 비밀번호'}
        placeholderTextColor="#0E0E0E66"
        secureTextEntry={true}
        onChange={e => onInput('newPassword', e)}
      />
      {validate.newPassword == false ? (
        <>
          <Text>올바른 비밀번호가 아닙니다.</Text>
          {/* <Image source={CheckSmallIcon} /> */}
        </>
      ) : (
        <Image source={CheckSmallIcon} />
      )}
      <TextInput
        value={form.confirmPassword}
        placeholder={'신규 비밀번호 확인'}
        placeholderTextColor="#0E0E0E66"
        secureTextEntry={true}
        onChange={e => onInput('confirmPassword', e)}
      />
      {validate.confirmPassword == false ? (
        <>
          <Text>상단 비밀번호와 일치하지 않습니다.</Text>
          {/* <Image source={CheckSmallIcon} /> */}
        </>
      ) : (
        <Image source={CheckSmallIcon} />
      )}
      <View>
        <TouchableOpacity
          disabled={!validate.button}
          onPress={() => onSummit()}
        >
          <Text>
            {validate.button ? "확인" : "아직"}
          </Text>
        </TouchableOpacity>
      </View>
      <PasswordChangeModal modal={modal} setModal={setModal} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '30%',
    resizeMode: 'contain',
  },
});
