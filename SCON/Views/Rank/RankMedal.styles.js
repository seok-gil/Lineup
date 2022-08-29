import {StyleSheet} from 'react-native'
import {colors} from '../../Styles'

const styles = StyleSheet.create({
  rankMedalWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  profileWrapper: {
    alignItems: 'center',
    marginBottom: 15,
  },

  crown: {
    marginBottom: 10,
  },

  rank: {
    color: colors.TEXT_DARK,
    fontSize: 17,
    marginBottom: 10,
  },

  rankFirstImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'cover',
  },

  rankImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
  },

  playerNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  playerFrom: {
    color: colors.TEXT_LIGHT,
    marginTop: 2,
    marginBottom: 5,
  },

  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  heart: {
    width: 10,
    resizeMode: 'contain',
    marginRight: 5,
  },

  boldText: {
    color: colors.TEXT_DARK,
    fontWeight: '700',
  },
})

export default styles
