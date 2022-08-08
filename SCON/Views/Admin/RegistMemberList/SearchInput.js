import React, {useRef} from 'react'
import {Button, View, TextInput, Image} from 'react-native'

import styles from './SearchInput.styles'
import {SearchIcon} from '../../../Assets/Icons'

function SearchInput({inputs, setInputs}) {
    const searchRef = useRef()

    const onChange = (keyvalue, e) => {
        const {text} = e.nativeEvent
        setInputs({
            ...inputs,
            [keyvalue]: text,
        })
    }
    return (
        <View style={styles.searchInputWrapper}>
            <Image source={SearchIcon} style={styles.searchInputIcon} />
            <TextInput
                value={inputs.search}
                placeholder={'검색'}
                placeholderTextColor="#0E0E0E66"
                onChange={e => onChange('search', e)}
                onSubmitEditing={() => searchRef.current.focus()}
            />
        </View>
    )
}

export default SearchInput
