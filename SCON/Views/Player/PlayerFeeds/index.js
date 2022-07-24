import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {ApiFetchOne} from '../../../Components/API/ApiFetch';

import {ButtonBig} from '../../../Components';
import {PlayerFeed} from './PlayerFeed';
import {PlayerFixedFeed} from './PlayerFixedFeeds';

import styles from './PlayerFeeds.styles';

function PlayerFeeds({playerId, feed, navigation}) {
  const [data, setData] = useState([]);
  const [nextFeed, setNextFeed] = useState(2);
  const [lastFeed, setLastFeed] = useState(1);

  useEffect(() => {
    const temp = data;
    for (var i = lastFeed; i < nextFeed; ++i) {
      ApiFetchOne({
        method: 'GET',
        url: `http://localhost:1337/api/feeds/${i}`,
        headers: {Authorization: 'token'},
        body: null,
      }).then(thing => {
        temp.push(thing);
      });
    }
    setLastFeed(nextFeed);
    setData(temp);
  }, [nextFeed]);

  return (
    <View style={styles.playerFeedsWrapper}>
      {/* <ButtonBig
        onPress={() => setNextFeed(nextFeed + 2)}
        text={`Feed 2보기${lastFeed} ~ ${nextFeed} @@@dummy`}
      /> */}
      <PlayerFixedFeed navigation={navigation} />
      {data.map((v, i) => (
        <PlayerFeed key={`player-feed-${i}`} feed={v} navigation={navigation} />
      ))}
    </View>
  );
}

export default PlayerFeeds;
