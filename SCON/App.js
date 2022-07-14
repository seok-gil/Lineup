import React, { Component } from 'react';
import { NavigationContainer, useNavigationState } from '@react-navigation/native';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { LoginPage } from './Views/Login';
import { RegistAccept, MakeId, Password }  from "./Views/Login/Regist"
import { ForgetPassword, PasswordReset }  from "./Views/Login/PasswordReset"
import { TabScreen } from './Components';
import { NotiScreen } from './Views/Noti';
import { SettingAlertScreen } from './Views/SettingAlert';
import { InquiryTabScreen } from "./Views/Inquiry"
import { AlertScreen } from './Views/Home/AlertScreen';
import { PlayerScreen } from './Views/Player';
import { RecordScreen } from './Views/Record';
import { FanScreen } from "./Views/Fan"
import { FeedScreen } from './Views/Feed';
import { StoryScreen, FeedRegist, CompetitionRegist, CompetitionResult, CompetitionResultDetail } from './Views/Story';
import { ProfileScreen } from './Views/MyPage';
import { AccountScreen, PasswordChange, PlayerRegist, Withdrawal } from './Views/Account';
const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator >
        <AppStack.Screen name="LoginPage" component={LoginPage} />
        <AppStack.Screen name="RegistAccpet" component={RegistAccept} />
        <AppStack.Screen name="MakeId" component={MakeId} />
        <AppStack.Screen name="Password" component={Password} />
        <AppStack.Screen name="ForgetPassword" component={ForgetPassword} />
        <AppStack.Screen name="PasswordReset" component={PasswordReset} />
        <AppStack.Screen name="Tab" component={TabScreen} options={{ headerShown: false }} />
        <AppStack.Screen name="AlertScreen" component={AlertScreen} />
        <AppStack.Screen name="Player" component={PlayerScreen} />
        <AppStack.Screen name="Record" component={RecordScreen} />
        <AppStack.Screen name="Fan" component={FanScreen} />
        <AppStack.Screen name="FeedScreen" component={FeedScreen} />
        <AppStack.Screen name="StoryScreen" component={StoryScreen} />
        <AppStack.Screen name="FeedRegist" component={FeedRegist} />
        <AppStack.Screen name="CompetitionRegist" component={CompetitionRegist} />
        <AppStack.Screen name="CompetitionResult" component={CompetitionResult} />
        <AppStack.Screen name="CompetitionResultDetail" component={CompetitionResultDetail} />
        <AppStack.Screen name="SettingAlert" component={SettingAlertScreen} />
        <AppStack.Screen name="InquiryTab" component={InquiryTabScreen} />
        <AppStack.Screen name="Profile" component={ProfileScreen} />
        <AppStack.Screen name="Noti" component={NotiScreen} />
        <AppStack.Screen name="AccountScreen" component={AccountScreen} />
        <AppStack.Screen name="PasswordChange" component={PasswordChange} />
        <AppStack.Screen name="PlayerRegist" component={PlayerRegist} />
        <AppStack.Screen name="Withdrawal" component={Withdrawal} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
/*
<AppStack.Screen name="PasswordChange" component={PasswordChange} />
    <AppStack.Screen name="PlayerRegist" component={PlayerRegist} />
    <AppStack.Screen name="Withdrawal" component={Withdrawal} />
<AppStack.Screen name="Profile" component={ProfileScreen} />
        <AppStack.Screen name="AccountStack" component={AccountScreen} />
    */