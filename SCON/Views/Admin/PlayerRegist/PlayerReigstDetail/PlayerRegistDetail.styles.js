import {StyleSheet} from 'react-native'
import {colors, globalTextStyle} from '../../../../Styles'

const styles = StyleSheet.create({
  playerDetailWrapper: {
    padding: 30,
    width: '100%',
    height: '100%',
    backgroundColor: colors.WHITE,
  },

  scrollWrapper: {
    flex: 1,
  },

  label: {
    ...globalTextStyle,
    fontWeight: '600',
    marginBottom: 8,
  },

  accountWrapper: {
    borderWidth: 1,
    borderColor: colors.GRAYE6,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 15,
  },

  accountName: {
    ...globalTextStyle,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 3,
  },

  accountEmail: {
    ...globalTextStyle,
    color: colors.TEXT_LIGHT,
  },

  imageWrapper: {
    width: '100%',
    alignItems: 'center',
  },

  image: {
    width: 240,
    height: 160,
    marginBottom: 15,
    resizeMode: 'cover',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.GRAYE6,
  },

  textWrapper: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAYE6,
    paddingVertical: 5,
    marginBottom: 15,
  },

  text: {
    ...globalTextStyle,
    fontSize: 14,
  },
})

export default styles
