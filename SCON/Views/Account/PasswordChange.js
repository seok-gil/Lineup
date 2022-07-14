import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import validator from 'validator';

import {SearchIcon} from '../../Assets/Icons';
import {ButtonComponent} from '../../Components';

export function PasswordChange({navigation}) {
  const [form, setForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [validate, setValidate] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
    button: false,
  });
  const oldpassword = '12345678';

  const onInput = (key, e) => {
    const {text} = e.nativeEvent;
    setForm({
      ...form,
      [key]: text,
    });
    if (key == 'oldPassword') {
      if (text == oldpassword) {
        setValidate({
          ...validate,
          [key]: true,
        });
      } else {
        setValidate({
          ...validate,
          [key]: false,
        });
      }
    }
    if (key == 'newPassword') {
      console.log(validator.isLength(text, 8, 12));
      if (validator.isLength(text, 8, 12)) {
        setValidate({
          ...validate,
          [key]: true,
        });
        console.log("test", key)
        console.log(validate)
      }
      else if (!validator.isLength(text, 8, 12)) {
        setValidate({
          ...validate,
          [key]: false,
        });
      }
    }
    // if (form.newPassword != null && (form.confirmPassword == form.newPassword))
    //   setValidate({
    //     ...validate,
    //     ['confirmPassword']: true,
    //   });
    // else if (form.confirmPassword != form.newPassword)
    //   setValidate({
    //     ...validate,
    //     ['confirmPassword']: false,
    //   });
    // if (validate.oldPassword && validate.newPassword && validate.confirmPassword)
    //   setValidate({
    //     ...validate,
    //     ['button']: true,
    //   });
    // else
    //   setValidate({
    //     ...validate,
    //     ['button']: false,
    //   });
      console.log("form",form)
      console.log("val", validate)
  };

  return (
    <View style={{flexDirection: 'column'}}>
      <Text>새로운 비밀번호로 변경해주세요.</Text>
      <Text>8~16자의 영문, 숫자, 특수기호를 조합하여 사용.</Text>
      <TextInput
        value={form.oldPassword}
        placeholder={'현재 비밀번호'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onInput('oldPassword', e)}
      />
      {validate.oldPassword == false ? (
        <>
          <Text>현재 비밀번호와 일치하지 않습니다.</Text>
          <Image source={SearchIcon} />
        </>
      ) : (
        <Image source={SearchIcon} />
      )}
      <TextInput
        value={form.newPassword}
        placeholder={'신규 비밀번호'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onInput('newPassword', e)}
      />
      {validate.newPassword == false ? (
        <>
          <Text>올바른 비밀번호가 아닙니다.</Text>
          <Image source={SearchIcon} />
        </>
      ) : (
        <Image source={SearchIcon} />
      )}
      <TextInput
        value={form.confirmPassword}
        placeholder={'신규 비밀번호 확인'}
        placeholderTextColor="#C5C8CE"
        onChange={e => onInput('confirmPassword', e)}
      />
      {validate.confirmPassword == false
        ? (<><Text>상단 비밀번호와 일치하지 않습니다.</Text><Image source={SearchIcon} /></>)
        : <Image source={SearchIcon} />}
			<ButtonBig component={'button'}/>
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
