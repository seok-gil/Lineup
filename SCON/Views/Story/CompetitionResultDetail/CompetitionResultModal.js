import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

const ScoreMedal = ({rank}) => {
  const medalColor = {
    1: '금',
    2: '은',
    3: '동',
  }[rank];
  return (
    <View>
      <Text>{rank}위</Text>
      <Text>{medalColor}메달</Text>
    </View>
  );
};

const CompetitionResultModal = ({modal, openModal, isSelected}) => {
  return (
    <Modal
      // animationType='slide'
      transparent={true}
      visible={modal.open}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text> 순위(필수입력)</Text>
          <View style={{flexDirection: 'row'}}>
            <ScoreMedal rank={1} />
            <ScoreMedal rank={2} />
            <ScoreMedal rank={3} />
            <View>
              <Text>직접입력</Text>
              <TextInput
                value={modal.open}
                placeholder={'예) 4위-30위'}
                placeholderTextColor="#C5C8CE"
                openModal={e => openModal('search')}></TextInput>
            </View>
          </View>
          <View>
            <Text>기록, 스코어 등</Text>
            <TextInput
              value={modal.open}
              placeholder={'예) 27초 11.7'}
              placeholderTextColor="#C5C8CE"
              onChange={e => openModal('search')}></TextInput>
          </View>
          <View>
            <CheckBox
              value={isSelected}
              onValueChange={() => openModal('search')}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              openModal();
            }}>
            <Text> 결과를 입력하지 않겠습니다.</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                openModal();
              }}>
              <Text> 취소</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                openModal();
              }}>
              <Text> 확인 </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CompetitionResultModal;
