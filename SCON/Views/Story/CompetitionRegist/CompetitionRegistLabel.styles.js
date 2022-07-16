import {StyleSheet} from 'react-native';

import {colors, globalAsteriskStyle, globalLabelStyle} from '../../../Styles';

const styles = StyleSheet.create({
  labelWrapper: {
    flexDirection: 'row',
  },
  inputLabelStyle: {
    ...globalLabelStyle,
    fontWeight: '700',
    marginBottom: 3,
    marginRight: 3,
  },
  asterisk: globalAsteriskStyle,
});

export default styles;
