import React, { useEffect } from 'react'
import {
    NavigationContainer,
} from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen';
import { BackHandler, Alert } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import { LoginPage } from './Views/Login'
import { RegistAccept, MakeId, Password } from './Views/Login/Regist'
import { ForgetPassword, PasswordReset } from './Views/Login/PasswordReset'
import { TabScreen, DefaultModal, RefreshTokenModal } from './Components'
import { NotiScreen } from './Views/Noti'
import { SettingAlertScreen } from './Views/SettingAlert'
import { InquiryTabScreen } from './Views/Inquiry'
import { AlertScreen } from './Views/Home/AlertScreen'
import { PlayerScreen } from './Views/Player'
import { RecordScreen } from './Views/Record'
import { FollowScreen, FollowPage } from './Views/Follow'
import { FeedScreen } from './Views/Feed'
import {
    StoryScreen,
    FeedRegist,
    CompetitionRegist,
    CompetitionResult,
    CompetitionResultDetail,
} from './Views/Story'
import { ProfileInfoScreen } from './Views/MyPage'
import {
    AccountScreen,
    PasswordChange,
    PlayerRegist,
    PlayerRegistForm,
    Withdrawal,
    PlayerRegistResultPage,
} from './Views/Account'
import {
    AdminTabScreen,
    AdminNotiTabScreen,
    RegistMemberTabScreen,
    Reports,
    Reporter,
    PlayerRegistTabScreen,
    PlayerReigstDetail,
    Inquiry,
} from './Views/Admin'

import { LogBox } from "react-native"

LogBox.ignoreAllLogs(true)

const AppStack = createStackNavigator()
export default function App() {
    useEffect(() => {
        try {
          setTimeout(() => {
            SplashScreen.hide(); /** 추가 **/
          }, 1000); /** 스플래시 시간 조절 (2초) **/
        } catch(e) {
          console.warn('에러발생');
          console.warn(e);
        }
      },[]);
      // Android 뒤로가기 버튼
      useEffect(() => {
        const backAction = () => {
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
        return () => backHandler.remove();
      }, []);
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{
                headerBackTitleVisible: false,
            }}>
                <AppStack.Screen name="LoginPage" component={LoginPage}
                    options={{
                        headerShown: false
                    }} />
                <AppStack.Screen name="Tab" component={TabScreen} options={{ headerShown: false, gestureEnabled:false }} />
                <AppStack.Screen name="RegistAccpet" component={RegistAccept}
                    options={{
                        title: '약관 동의'
                    }} />
                <AppStack.Screen name="MakeId" component={MakeId}
                    options={{
                        title: '아이디 만들기'
                    }} />
                <AppStack.Screen name="Password" component={Password}
                    options={{
                        title: '비밀번호 설정'
                    }} />
                <AppStack.Screen name="ForgetPassword" component={ForgetPassword}
                    options={{
                        title: '비밀번호 재설정'
                    }} />
                <AppStack.Screen name="PasswordReset" component={PasswordReset}
                    options={{
                        title: '비밀번호 재설정'
                    }} />
                <AppStack.Screen name="AlertScreen" component={AlertScreen}
                    options={{
                        title: '알림'
                    }} />
                <AppStack.Screen name="Player" component={PlayerScreen}
                    options={{
                        title: '플레이어'
                    }} />
                <AppStack.Screen name="Record" component={RecordScreen}
                    options={{
                        title: '전적'
                    }} />
                <AppStack.Screen name="Follow" component={FollowScreen}
                    options={{
                        title: '팬목록'
                    }} />
                <AppStack.Screen name="FollowPage" component={FollowPage}
                    options={{
                        title: '팬페이지'
                    }} />
                <AppStack.Screen name="FeedScreen" component={FeedScreen}
                    options={{
                        title: '선수 페이지'
                    }} />
                <AppStack.Screen name="StoryScreen" component={StoryScreen}
                    options={{
                        title: '스토리 추가'
                    }} />
                <AppStack.Screen name="FeedRegist" component={FeedRegist}
                    options={{
                        title: '피드'
                    }} />
                <AppStack.Screen name="CompetitionRegist" component={CompetitionRegist}
                    options={{
                        title: '대회 일정'
                    }} />
                <AppStack.Screen name="CompetitionResult" component={CompetitionResult}
                    options={{
                        title: '대회 결과'
                    }} />

                <AppStack.Screen name="CompetitionResultDetail" component={CompetitionResultDetail}
                    options={{
                        title: '대회 결과'
                    }} />
                <AppStack.Screen name="SettingAlert" component={SettingAlertScreen}
                    options={{
                        title: '알림설정'
                    }} />
                <AppStack.Screen name="InquiryTab" component={InquiryTabScreen}
                    options={{
                        title: '문의하기'
                    }} />
                <AppStack.Screen name="Profile" component={ProfileInfoScreen}
                    options={{
                        title: '프로필'
                    }} />
                <AppStack.Screen name="Noti" component={NotiScreen}
                    options={{
                        title: '공지사항'
                    }} />
                <AppStack.Screen name="AccountScreen" component={AccountScreen}
                    options={{
                        title: '계정 관리'
                    }} />
                <AppStack.Screen name="PasswordChange" component={PasswordChange}
                    options={{
                        title: '비밀번호 변경'
                    }} />
                <AppStack.Screen name="PlayerRegist" component={PlayerRegist}
                    options={{
                        title: '선수 인증'
                    }} />
                <AppStack.Screen name="PlayerRegistForm" component={PlayerRegistForm}
                    options={{
                        title: '선수 인증'
                    }} />
                <AppStack.Screen name="PlayerRegistResultPage" component={PlayerRegistResultPage}
                    options={{
                        title: '선수 인증'
                    }} />
                <AppStack.Screen name="Withdrawal" component={Withdrawal}
                    options={{
                        title: '회원 탈퇴'
                    }} />
                <AppStack.Screen
                    name="AdminTab"
                    component={AdminTabScreen}
                    options={{ headerShown: false }}
                />
                <AppStack.Screen name="AdminNotiTab" component={AdminNotiTabScreen}
                    options={{
                        title: '공지사항'
                    }} />
                <AppStack.Screen
                    name="RegistMemberTab"
                    component={RegistMemberTabScreen}
                    options={{
                        title: '가입자 목록'
                    }} />
                <AppStack.Screen name="Report" component={Reports}
                    options={{
                        title: '신고 접수'
                    }} />
                <AppStack.Screen name="Reporter" component={Reporter}
                    options={{
                        title: '신고자'
                    }} />

                <AppStack.Screen name="RegistTab" component={PlayerRegistTabScreen}
                    options={{
                        title: '선수 인증 승인'
                    }} />
                <AppStack.Screen name="PlayerReigstDetail" component={PlayerReigstDetail}
                    options={{
                        title: '신고 인증 승인'
                    }} />
                <AppStack.Screen name="Inquiry" component={Inquiry} options={{
                    title: '문의 내역'
                }} />
                <AppStack.Screen name="ModalPage" component={DefaultModal} />
                <AppStack.Screen name="RefreshTokenModal" component={RefreshTokenModal} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
