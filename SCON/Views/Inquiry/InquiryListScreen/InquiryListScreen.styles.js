import {StyleSheet} from 'react-native'
import {colors} from '../../../Styles/constants'

const styles = StyleSheet.create({
  inquiryScreenWrapper: {
    backgroundColor: colors.WHITE,
    height: '100%',
  },

  noInquiryList: {
    backgroundColor: colors.WHITE,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    marginTop: 20,
    color: colors.TEXT_DARK,
    opacity: 0.5,
    fontSize: 20,
    fontWeight: '600',
  },
})

export default styles
