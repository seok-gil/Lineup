import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Swiper from 'react-native-swiper';

import {GoPlayer} from './GoPlayer';
import {PlayerCard, EmptyCard, PlayerMyCard} from './Card';

import styles from './Body.styles';

function FollowCardList({Data, navigation}) {
  const view = [];
  const follow = Data.follow;
  const user_code = Data.user.user_code;

  if (user_code == 1)
    view.push(<PlayerMyCard key={`player-card`} navigation={navigation} />);
  const playercard = () => {
    for (let i = 0; i < 3; i++) {
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

export function Body({Data, navigation}) {
  const user_code = Data.user.user_code;
  const view = [];
  const [goPlayer, setgoPlayer] = useState(Data.user.user_goPlayer);

  return (
    <View style={{flex: 3}}>
      {user_code == 1 && goPlayer == true && (
        <GoPlayer navigation={navigation} setgoPlayer={setgoPlayer} />
      )}
      <Text>좋아하는 운동선수를 추가해보세요!</Text>
      <Text>최대 3명을 추가할 수 있습니다</Text>
      <FollowCardList Data={Data} navigation={navigation} />
    </View>
  );
}
