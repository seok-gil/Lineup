import {StyleSheet, Dimensions} from 'react-native'

import {colors} from '../../../Styles/constants'

const screenWidth = Dimensions.get('window').width

import {
  globalButtonStyle,
  globalButtonTextStyle,
  globalLargeInputStyle,
} from '../../../Styles'

const styles = StyleSheet.create({
  profileScreenWrapper: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: colors.WHITE,
  },

  profileImageWrapper: {
    position: 'relative',
    width: '100%',
    height: 150,
  },

  profileBackground: {
    position: 'relative',
    width: '100%',
    height: '80%',
  },

  backgroundPhoto: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  profileImage: {
    position: 'absolute',
    bottom: 0,
    right: screenWidth / 2 - 40,
  },

  profileImageRelative: {
    position: 'relative',
  },

  profilePhoto: {
    width: 80,
    height: 80,
    borderWidth: 3,
    borderColor: colors.WHITE,
    borderRadius: 40,
    resizeMode: 'cover',
  },

  formSection: {
    padding: 30,
  },

  formLabel: {
    color: colors.TEXT_DARK,
    fontSize: 14,
  },
  RegistButtonWrapper: {
    alignItems: 'center',
  },
  RegistButton: globalButtonStyle,

  RegistButtonText: globalButtonTextStyle,
})

export default styles
