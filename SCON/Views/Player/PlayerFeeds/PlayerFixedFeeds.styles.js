import {StyleSheet} from 'react-native';

import {colors, globalButtonTextStyle, listElementStyle} from '../../../Styles';

const styles = StyleSheet.create({
  fixedFeedWrapper: {
    ...listElementStyle,
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  fixedFeedTag: {
    position: 'absolute',
    top: 8,
    right: 20,
  },

  fixedFeedTagInner: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fixedFeedTagImage: {
    position: 'absolute',
    width: 35,
    height: 45,
  },

  fixedFeedTagText: globalButtonTextStyle,

  fixedFeedPin: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  fixedFeedPinIcon: {
    width: 10,
    height: 10,
    resizeMode: 'cover',
    marginRight: 5,
  },

  fixedFeedPinText: {
    fontSize: 11,
    color: colors.TEXT_DARK,
  },

  fixedFeedContent: {
    fontWeight: '700',
    color: colors.TEXT_DARK,
    marginBottom: 20,
  },

  feedLikedBox: {flexDirection: 'row'},

  feedLikeBoxInner: {flexDirection: 'row'},

  likeIcon: {
    width: 20,
    height: 15,
    resizeMode: 'contain',
    marginRight: 5,
  },

  likeText: {
    marginRight: 10,
    color: colors.TEXT_LIGHT,
  },
});

export default styles;
