import {StyleSheet} from 'react-native'

import {
  colors,
  globalButtonStyle,
  globalButtonTextStyle,
} from '../../../../Styles'

const styles = StyleSheet.create({
  centeredView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BLACK_FADED,
  },

  modalWrapper: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    height: '80%',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },

  modalInnerScroll: {
    borderWidth: 1,
    borderColor: colors.GRAYC9,
    marginBottom: 20,
    borderRadius: 20,
    padding: 10,
  },

  textStyle: {
    flexWrap: 'wrap',
  },

  title: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 10,
  },

  buttonStyle: {...globalButtonStyle, width: '90%'},

  buttonTextStyle: globalButtonTextStyle,
})

export default styles
