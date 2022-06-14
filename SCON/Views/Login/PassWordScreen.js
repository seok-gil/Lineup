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
            <Text>비밀번호를 설정해주세요</Text>
            <Text>8~16자의 영문, 숫자, 특수기호를 조합하여 사용.</Text>
            <Button title="확인"/>
        </View>
    );
  }