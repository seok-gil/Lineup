import React, {Component} from 'react';
import {
  NavigationContainer,
  useNavigationState,
} from '@react-navigation/native';
import {createStackNavigator, Header} from '@react-navigation/stack';
import {LoginPage} from './Views/Login';
import {RegistAccept, MakeId, Password} from './Views/Login/Regist';
import {ForgetPassword, PasswordReset} from './Views/Login/PasswordReset';
import {TabScreen} from './Components';
import {NotiScreen} from './Views/Noti';
import {SettingAlertScreen} from './Views/SettingAlert';
import {InquiryTabScreen} from './Views/Inquiry';
import {AlertScreen} from './Views/Home/AlertScreen';
import {PlayerScreen} from './Views/Player';
import {RecordScreen} from './Views/Record';
import {FanScreen} from './Views/Fan';
import {FeedScreen} from './Views/Feed';
import {
  StoryScreen,
  FeedRegist,
  CompetitionRegist,
  CompetitionResult,
  CompetitionResultDetail,
} from './Views/Story';
import {ProfileInfoScreen} from './Views/MyPage';
import {
  AccountScreen,
  PasswordChange,
  PlayerRegist,
  Withdrawal,
} from './Views/Account';
import {
  AdminTabScreen,
  AdminNotiTabScreen,
  RegistMemberTabScreen,
  Reports,
  Reporter,
  PlayerRegistTabScreen,
  PlayerReigstDetail,
  Inquiry,
} from './Views/Admin';

const AppStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {/* <AppStack.Screen name="AdminTab" component={AdminTabScreen} options={{ headerShown: false }} /> */}
        <AppStack.Screen name="LoginPage" component={LoginPage} />
        <AppStack.Screen name="RegistAccpet" component={RegistAccept} />
        <AppStack.Screen name="MakeId" component={MakeId} />
        <AppStack.Screen name="Password" component={Password} />
        <AppStack.Screen name="ForgetPassword" component={ForgetPassword} />
        <AppStack.Screen name="PasswordReset" component={PasswordReset} />
        <AppStack.Screen
          name="Tab"
          component={TabScreen}
          options={{headerShown: false}}
        />
        <AppStack.Screen name="AlertScreen" component={AlertScreen} />
        <AppStack.Screen name="Player" component={PlayerScreen} />
        <AppStack.Screen name="Record" component={RecordScreen} />
        <AppStack.Screen name="Fan" component={FanScreen} />
        <AppStack.Screen name="FeedScreen" component={FeedScreen} />
        <AppStack.Screen name="StoryScreen" component={StoryScreen} />
        <AppStack.Screen name="FeedRegist" component={FeedRegist} />
        <AppStack.Screen
          name="CompetitionRegist"
          component={CompetitionRegist}
        />
        <AppStack.Screen
          name="CompetitionResult"
          component={CompetitionResult}
        />
        <AppStack.Screen
          name="CompetitionResultDetail"
          component={CompetitionResultDetail}
        />
        <AppStack.Screen name="SettingAlert" component={SettingAlertScreen} />
        <AppStack.Screen name="InquiryTab" component={InquiryTabScreen} />
        <AppStack.Screen name="Profile" component={ProfileInfoScreen} />
        <AppStack.Screen name="Noti" component={NotiScreen} />
        <AppStack.Screen name="AccountScreen" component={AccountScreen} />
        <AppStack.Screen name="PasswordChange" component={PasswordChange} />
        <AppStack.Screen name="PlayerRegist" component={PlayerRegist} />
        <AppStack.Screen name="Withdrawal" component={Withdrawal} />
        <AppStack.Screen name="AdminNotiTab" component={AdminNotiTabScreen} />
        <AppStack.Screen
          name="RegistMemberTab"
          component={RegistMemberTabScreen}
        />
        <AppStack.Screen name="Report" component={Reports} />
        <AppStack.Screen name="Reporter" component={Reporter} />
        <AppStack.Screen name="RegistTab" component={PlayerRegistTabScreen} />
        <AppStack.Screen
          name="PlayerReigstDetail"
          component={PlayerReigstDetail}
        />
        <AppStack.Screen name="Inquiry" component={Inquiry} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
