import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    //그림자의 영역 지정
    shadowOffset: {
      width: 0,
      height: 2,
    },
    //불투명도 지정
    shadowOpacity: 0.25,
    //반경 지정
    shadowRadius: 3.84,
  },
});

export default styles;
