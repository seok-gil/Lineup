import {StyleSheet} from 'react-native'
import {colors} from '../../../Styles'

const styles = StyleSheet.create({
  commentListWrapper: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  commentListContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.WHITE,
  },

  commentListInner: {
    position: 'relative',
    flex: 1,
    marginTop: 10,
  },
})

export default styles
