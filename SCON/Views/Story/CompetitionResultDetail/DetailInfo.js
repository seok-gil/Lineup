import {View, Text, TouchableOpacity} from 'react-native';

const DetailInfo = ({item}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {item.input ? (
        <View style={{flexDirection: 'row'}}>
          <Text>{item.name}</Text>
          <Text>
            ({item.score} {item.score_detail})
          </Text>
        </View>
      ) : (
        <Text>{item.name}</Text>
      )}
      <TouchableOpacity onPress={() => openModal(item)}>
        <Text>수정</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailInfo;
