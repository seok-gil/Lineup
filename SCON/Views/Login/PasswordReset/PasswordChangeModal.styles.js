import {StyleSheet} from 'react-native'
import {colors, globalTextStyle} from '../../../Styles'

const styles = StyleSheet.create({
  modalImage: {
    width: 30,
    resizeMode: 'contain',
    marginBottom: 5,
  },

  modalText: {
    globalTextStyle,
    fontWeight: '700',
  },

  centeredView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BLACK_FADED,
  },

  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '60%',
    justifyContent: 'space-between',
  },

  modalTop: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBottom: {
    backgroundColor: colors.THEME_SKYBLUE_LIGHT_SOLID,
    height: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles
