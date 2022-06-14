import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from './TermsScreen';
import { LoginScreen } from './IDScreen';
import { LoginScreen } from './PassWordScreen';


import {
	Button,
	View,
	Image,
	Text,
	StyleSheet,
} from 'react-native';

// 로그인 버튼 
function LoginScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Lineup +</Text>
        <Button title="로그인"/>
        <Button title="회원가입"/>
        <Button title="비밀번호 찾기"/>
        {/* <Button title="로그인" onPress={()=> navigation.navigate('HomeScreen')}/> */}
      </View>
    );
  }

// 버튼 눌렀을 때 상태 설정
function DetailsScreen({navigation}){
    return ( 
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <TouchableOpacity onPress={()=> navigation.navigate(' ? ')}>
        <Text> </Text>
        </TouchableOpacity> */}
        </View>
    );
  }

const Stack = createStackNavigator();

// 버튼 눌렀을 때 이동 경로 설정 
class App extends React.Component{
  
  render(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={TermsScreen} />
          {/* <Stack.Screen name="Reset_pw" component={PWResetScreen_1} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

// /* Splash.js에서 user_id가 확인되지 않으면 LoginScreen.js로 이동하게 된다. */

// const [userId, setUserId] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [errortext, setErrortext] = useState('');

// <TextInput                                                         
//           style={styles.textFormTop}
//           placeholder={'이메일'}
//           onChangeText={(userId) => setUserId(userId)}
//           autoCapitalize="none"
//           returnKeyType="next"
//           onSubmitEditing={() =>
//             passwordInputRef.current && passwordInputRef.current.focus()
//           }
//           underlineColorAndroid="#f000"
//           blurOnSubmit={false}
//         />              