import {StyleSheet} from 'react-native';

import {colors} from '../../../Styles';

const styles = StyleSheet.create({
  headerWrapper: {
    width: '100%',
    backgroundColor: colors.WHITE,
    paddingVertical: 10,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },

  alignment: {
    paddingHorizontal: 20,
    flexGrow: 1,
    flexBasis: 1,
    justifyContent: 'center',
  },

  imageWrapper: {
    alignItems: 'center',
  },

  alertWrapper: {
    alignItems: 'flex-end',
  },

  alertIconWrapper: {
    position: 'relative',
  },

  alertBadge: {
    position: 'absolute',
    top: -3,
    right: -3,
    backgroundColor: colors.THEME_SKYBLUE,
    width: 14,
    height: 14,
    borderRadius: 7,
    borderColor: colors.WHITE,
    borderWidth: 1,
  },


  viewWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
  },

  image: {
    width: 64,
    height: 64,
    marginRight: 15,
    resizeMode: 'contain',
  },

  viewProfileInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  nameText: {
    marginBottom: 3,
    width: 150,
    fontSize: 20,
    fontWeight: '700',
  },

  emailText: {
    width: 150,
    color: colors.TEXT_LIGHT,
  },
});

export default styles;
