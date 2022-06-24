import DefaultProfile from '../../Assets/Images/ProfileDefault.png';
import AddPlayer from '../../Assets/Images/AddPlayer.png';
import React, { Component, useState } from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Swiper from 'react-native-swiper';

function PlayerCard({ card, user_code, index, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Player')}
      style={{ flexDirection: 'row' }}>
      <Text>{card.player_name}</Text>
      {index == 0 && <Text style={{ flex: 1 }}>@@@null@@@</Text>}
      {index != 0 && <Text style={{ flex: 1 }}>@@@prev@@@</Text>}
      <Image source={DefaultProfile} style={styles.image} />
      {index == 2 + user_code && <Text style={{ flex: 1 }}>@@@null@@@</Text>}
      {index != 2 + user_code && <Text style={{ flex: 1 }}>@@@next@@@</Text>}
    </TouchableOpacity>
  );
}

function EmptyCard({ user_code, index, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SearchStack')}
      style={{ flexDirection: 'row' }}>
      {index == 0 && <Text style={{ flex: 1 }}>@@@null@@@</Text>}
      {index != 0 && <Text style={{ flex: 1 }}>@@@prev@@@</Text>}
      <Image source={AddPlayer} style={styles.image2} />
      {index == 2 + user_code && <Text style={{ flex: 1 }}>@@@null@@@</Text>}
      {index != 2 + user_code && <Text style={{ flex: 1 }}>@@@next@@@</Text>}
    </TouchableOpacity>
  );
}

function PlayerMyCard({ view, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Player')}
      style={{ flexDirection: 'row' }}>
      <Text style={{ flex: 1 }}>@@@null@@@</Text>
      <Text>MyPage</Text>
      <Image source={DefaultProfile} style={styles.image2} />
      <Text style={{ flex: 1 }}>@@@next@@@</Text>
    </TouchableOpacity>
  );
}

function FollowCardList({ Data, navigation }) {
  const view = [];
  const follow = Data.follow;
  const user_code = Data.user.user_code;

  if (user_code == 1)
    view.push(<PlayerMyCard key={`player-card`} navigation={navigation} />);
  const playercard = () => {
    for (let i = 0; i < 3; ++i) {
      if (follow[i])
        view.push(
          <PlayerCard
            key={`player-card-${user_code}`}
            user_code={user_code}
            card={follow[i]}
            index={i + user_code}
            navigation={navigation}
          />,
        );
      else
        view.push(
          <EmptyCard
            key={`empty-card-${user_code}`}
            user_code={user_code}
            index={i + user_code}
            navigation={navigation}
          />,
        );
    }
    return view;
  };

  return (
    <Swiper style={styles.wrapper} loop={false}>
      {playercard()}
    </Swiper>
  );
}

function GoPlayer({ setgoPlayer, navigation }) {
  const onClick = () => {
    setgoPlayer(false);
  };
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => navigation.navigate('PlayerRegist')}>
        <Text>선수로 등록하시겠어요?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onClick()}>
        <Text>x</Text>
      </TouchableOpacity>
    </View>
  );
}

export function Body({ Data, navigation }) {
  const user_code = Data.user.user_code;
  const view = [];
  const [goPlayer, setgoPlayer] = useState(Data.user.user_goPlayer);

  return (
    <View style={{ flex: 3 }}>
      {user_code == 1 && goPlayer == true && (
        <GoPlayer navigation={navigation} setgoPlayer={setgoPlayer} />
      )}
      <Text>좋아하는 운동선수를 추가해보세요!</Text>
      <Text>최대 3명을 추가할 수 있습니다</Text>
      <FollowCardList Data={Data} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '30%',
    height: '1000%',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  image2: {
    flex: 1,
    width: '30%',
    height: '1000%',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
