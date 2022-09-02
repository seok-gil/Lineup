import {StyleSheet} from 'react-native'

import {colors, globalInputStyle} from '../../../Styles'

const styles = StyleSheet.create({
  competitionRegistWrapper: {
    height: '100%',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },

  competitionRegistInner: {
    flexDirection: 'column',
    flex: 1,
    padding: 30,
  },

  inputLabelStyle: {
    color: colors.TEXT_DARK,
    fontSize: 13,
    marginBottom: 5,
    fontWeight: '700',
  },

  inputStyle: {
    ...globalInputStyle,
    marginBottom: 15,
  },

  rangeInputStyle: globalInputStyle,

  dateRangeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  waveText: {
    color: colors.TEXT_LIGHT,
    marginHorizontal: 5,
  },

  calendarImageStyle: {
    width: 16,
    resizeMode: 'contain',
    marginLeft: 5,
  },

  borderLine: {
    borderWidth: 1,
    borderColor: colors.GRAYE6,
    marginBottom: 15,
  },
})

export default styles
