import {StyleSheet} from 'react-native';
import {colors, globalInputStyle} from '../../../Styles';

const styles = StyleSheet.create({
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
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },

  modalTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleStrong: {
    color: colors.TEXT_DARK,
    fontWeight: '700',
    fontSize: 13,
  },

  titleNormal: {
    color: colors.TEXT_DARK,
    fontSize: 13,
  },

  asterisk: {
    color: colors.THEME_SKYBLUE,
  },

  rankWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },

  medalWrapper: {
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  medalTitle: {
    marginBottom: 3,
    color: colors.TEXT_DARK,
    fontSize: 11,
  },

  rankTitle: {
    color: colors.TEXT_DARK,
    fontSize: 11,
    marginBottom: 3,
  },

  rankInput: globalInputStyle,

  scoreInput: {
    ...globalInputStyle,
    marginTop: 10,
    marginBottom: 20,
  },

  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkbox: {
    transform: [{scale: 0.4}],
    margin: -5,
  },

  checkboxLabel: {
    fontSize: 11,
  },

  modalBottom: {
    flexDirection: 'row',
    height: 45,
  },

  cancelButton: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    backgroundColor: colors.GRAYE6,
  },

  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 20,
    backgroundColor: colors.THEME_SKYBLUE_LIGHT_SOLID,
    flex: 3,
  },

  buttonText: {
    color: colors.TEXT_DARK,
    fontWeight: '700',
  },
});

export default styles;
