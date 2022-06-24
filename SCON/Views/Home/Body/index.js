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
    view.push(
      <View style={styles.swiperCardWrapper}>
        <PlayerMyCard key={`player-card`} navigation={navigation} />
      </View>,
    );
  const playercard = () => {
    for (let i = 0; i < 3; i++) {
      if (follow[i])
        view.push(
          <View style={styles.swiperCardWrapper}>
            <PlayerCard
              key={`player-card-${user_code}`}
              user_code={user_code}
              card={follow[i]}
              index={i + user_code}
              navigation={navigation}
            />
          </View>,
        );
      else
        view.push(
          <View style={styles.swiperCardWrapper}>
            <EmptyCard
              key={`empty-card-${user_code}`}
              user_code={user_code}
              index={i + user_code}
              navigation={navigation}
            />
          </View>,
        );
    }
    return view;
  };

  return (
    <Swiper
      style={styles.swiperWrapper}
      containerStyle={styles.containerWrapper}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      loop={false}>
      {playercard()}
    </Swiper>
  );
}

export function Body({Data, navigation}) {
  const user_code = Data.user.user_code;
  const view = [];
  const [goPlayer, setgoPlayer] = useState(Data.user.user_goPlayer);

  return (
    <View style={styles.bodyWrapper}>
      {user_code === 1 && goPlayer === true && (
        <GoPlayer navigation={navigation} setgoPlayer={setgoPlayer} />
      )}
      <View style={styles.bodyTextWrapper}>
        {user_code === 1 ? (
          <Text style={styles.bodyTextLarge}>
            <Text style={styles.textImportant}>나만의 라인업</Text>을{'\n'}
            추가해보세요!
          </Text>
        ) : (
          <Text style={[styles.bodyTextLarge, styles.bodyTextPlayer]}>
            당신을 <Text style={styles.textImportant}>응원합니다!</Text>
          </Text>
        )}
        <Text style={styles.bodyTextSmall}>
          {user_code === 1
            ? '최대 3명까지 추가할 수 있어요'
            : '본인 계정관리는 물론 선수 3명을 팔로우 할 수 있습니다'}
        </Text>
      </View>
      <FollowCardList Data={Data} navigation={navigation} />
    </View>
  );
}
