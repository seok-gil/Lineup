import {StyleSheet} from 'react-native';

import {
  colors,
  globalAsteriskStyle,
  globalBoldTextStyle,
} from '../../../Styles';

const styles = StyleSheet.create({
  labelWrapper: {
    flexDirection: 'row',
  },
  inputLabelStyle: {
    ...globalBoldTextStyle,
    fontWeight: '700',
    marginBottom: 3,
    marginRight: 3,
  },
  asterisk: globalAsteriskStyle,
});

export default styles;
