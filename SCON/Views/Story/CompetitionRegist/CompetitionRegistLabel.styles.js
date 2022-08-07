import {StyleSheet} from 'react-native'

import {colors, globalAsteriskStyle, globalTextStyle} from '../../../Styles'

const styles = StyleSheet.create({
    labelWrapper: {
        flexDirection: 'row',
    },
    inputLabelStyle: {
        ...globalTextStyle,
        fontWeight: '700',
        marginBottom: 3,
        marginRight: 3,
    },
    asterisk: globalAsteriskStyle,
})

export default styles
