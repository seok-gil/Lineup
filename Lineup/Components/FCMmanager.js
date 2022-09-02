import React, {useEffect, useState } from 'react'

import messaging from '@react-native-firebase/messaging';

export function FCMmanager({form, setForm}) {
  useEffect(() => {
    this.requestUserPermissionForFCM()
  }, [])
  requestUserPermissionForFCM = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      const token = await messaging().getToken();
      setForm({
        ...form,
        ['fcmToken'] : token
      })
      this.handleFcmMessage();
    } else {
      console.log('fcm auth fail');
    }
  }

  handleFcmMessage = () => {
    //푸시를 받으면 호출됨 
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    //알림창을 클릭한 경우 호출됨 
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });
  }
}