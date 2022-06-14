import React, { Component } from 'react';
import {
	Button,
	View,
	Image,
	Text,
	StyleSheet,
} from 'react-native';

export function LoginScreen() {
    return (
        <View>
            <Text>닉네임을 입력해주세요.</Text>
            <Text>계정으로 사용하실 이메일을 입력해주세요.</Text>
            <Button title="전송"/>
            <Text>인증메일을 발송합니다. 메일 확인 후 인증번호를 입력해주세요.</Text>
            <Button title="다음"/>
        </View>
    );
  }