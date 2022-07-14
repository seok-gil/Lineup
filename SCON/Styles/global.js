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

export const globalButtonStyle = {
  width: 300,
  height: 45,
  borderRadius: 25,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.THEME_SKYBLUE,
};

export const globalButtonTextStyle = {
  fontWeight: '700',
  color: colors.WHITE,
};
