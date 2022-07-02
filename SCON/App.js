import React, { Component } from 'react';
import { NavigationContainer,useNavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import { TabScreen } from './Components';
import { NotiScreen } from './Views/Noti';
import { SettingAlertScreen } from './Views/SettingAlert';
import { InquiryTabScreen } from "./Views/Inquiry"

const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator >
        <AppStack.Screen name="Tab" component={TabScreen} options={{ headerShown: false }}/>
        <AppStack.Screen name="Noti" component={NotiScreen} />
        <AppStack.Screen name="SettingAlert" component={SettingAlertScreen} />
        <AppStack.Screen name="InquiryTab" component={InquiryTabScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
