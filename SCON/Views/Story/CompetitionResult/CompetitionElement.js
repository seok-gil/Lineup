import {View, Text, TouchableOpacity} from 'react-native';

import styles from './CompetitionElement.styles';

const CompetitionElement = ({data}) => {
  console.log(data.input);
  let input = data.input;
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text> {data.name}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CompetitionResultDetail', {
              names: ['Brent', 'Satya', 'Michaś'],
            })
          }
          style={{flex: 2}}>
          {input == true && <Text style={{flex: 1}}> 결과 입력</Text>}
          {input == false && <Text style={{flex: 1}}> 수정 하기</Text>}
        </TouchableOpacity>
      </View>
      <Text> {data.date}</Text>
    </View>
  );
};

export default CompetitionElement;
