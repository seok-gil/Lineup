import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { BirthForm } from './BirthForm';
import { GenderForm } from './GenderForm';
import { ButtonBig } from '../../../Components';
import { CaptureForm } from './CaptureForm';
import { PlayerRegistModal } from './PlayerRegistModal';

export function PlayerRegist({ navigation }) {
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState({
    name: '',
    birth: '',
    gender: '',
    major: '',
    belong: '',
  });
  const [validate, setValidate] = useState({
    name: '',
    birth: '',
    gender: '',
    major: '',
    belong: '',
  });
  const onInput = (key, e) => {
    const { text } = e.nativeEvent;
    setForm({
      ...form,
      [key]: text,
    });
  };
  const onModal = () => {
    setModal(true)
  }
  return (
    <View style={{ flexDirection: 'column' }}>
      <Text>운동선수 확인을 시작합니다.</Text>
      <Text>확인된 내용이 실제와 다르면 이용이 제한됩니다.</Text>
      <CaptureForm />
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
        value={form.major}
        placeholder={'종목을 선택해주세요'}
        placeholderTextColor="#0E0E0E66"
        onChange={e => onInput('major', e)}
      />
      <Text>소속</Text>
      <TextInput
        value={form.belong}
        placeholder={'소속명을 입력해주세요'}
        placeholderTextColor="#0E0E0E66"
        onChange={e => onInput('belong', e)}
      />
      <ButtonBig text={'버튼'} onPress={() => onModal()}/>
      <PlayerRegistModal modal={modal} setModal={setModal} navigation={navigation} />
    </View>
  );
}
