import {colors} from './constants';

export const listElementStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 25,
  paddingVertical: 18,
  borderBottomColor: colors.GRAYE6,
  borderBottomWidth: 1,
};

export const listElementStyleNarrow = {
  ...listElementStyle,
  paddingVertical: 12,
};
