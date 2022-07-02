import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  alertComponentWrapper: {
    padding: 20,
  },

  alertNotRead: {
    opacity: 0.5,
  },

  alertRead: {
    opacity: 1,
  },

  alertComponentTop: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 25,
  },

  alertComponentImage: {
    marginRight: 6,
    width: 16,
    height: 16,
  },

  alertTitle: {
    fontSize: 17,
    fontWeight: '700',
  },

  alertComponentMiddle: {
    paddingLeft: 22,
    marginTop: 10,
  },

  alertContent: {
    fontSize: 13,
    fontWeight: '500',
  },

  alertComponentBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 15,
    marginTop: 10,
  },

  alertCreatedAt: {
    fontSize: 11,
  },

  alertXIcon: {
    width: 10,
    height: 10,
  },
});

export default styles;
