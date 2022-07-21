import React, {useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import ViewPlayer from './ViewPlayer';

import styles from './SearchID.styles';

function SearchID({ inputs, navigation}) {
  const {search} = inputs;
  const data = require('../../../Assets/Data/Search.json').player;
  const [more, setMore] = useState(false);

  const onClickMore = () => {
    if (!more) setMore(true);
    else setMore(false);
  };
  return (
    <ScrollView>
      {data
        .filter(player => {
          if (search == null) return player;
          else if (
            player.player_name.includes(search) ||
            player.player_major.includes(search) ||
            player.player_belong.includes(search)
          ) {
            return player;
          }
        })
        .map((player, index) => {
          if (index >= 4 && !more) return false;
          return <ViewPlayer key={`view${index}`}player={player} navigation={navigation} />;
        })}
      <TouchableOpacity onPress={() => onClickMore()}>
        <View style={styles.searchExpand}>
          {more ? (
            <Text style={styles.expandText}>결과 접기</Text>
          ) : (
            <Text style={styles.expandText}>결과 모두 보기</Text>
          )}
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default SearchID;
