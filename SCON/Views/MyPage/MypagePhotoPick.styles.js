import {StyleSheet} from 'react-native';

import {colors} from '../../Styles/constants';

export const backgroundPhotoPickStyles = StyleSheet.create({
  photoPickWrapper: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: colors.WHITE,
    borderRadius: 20,
  },
  photoPickImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  photoPickTouchable: {},
});

export const profilePhotoPickStyles = StyleSheet.create({
  photoPickWrapper: {
    position: 'absolute',
    bottom: 0,
    right: -5,
    backgroundColor: colors.WHITE,
    borderRadius: 20,
  },
  photoPickImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  photoPickTouchable: {},
});
