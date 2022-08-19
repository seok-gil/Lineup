import React, { useEffect, useState } from 'react'
import {
    View,
    Image,
    Text,
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

export function GenderForm({ form, setForm, setMount }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    useEffect(() => {
        if (value == '남자')
            code = '0'
        else
            code = '1'
        setForm({
            ...form,
            ['gender']: code,
        })
        setMount('gender')
    }, [value])

    return (
        <View>
            <Text>성별</Text>
            <DropDownPicker
                open={open}
                value={value}
                defaultIndex={0}
                setOpen={setOpen}
                setValue={setValue}
                placeholder="여자 / 남자 선택해주세요"
                // containerStyle={{ height: 40 }}
                onChangeItem={value => console.log("a",value)}
                items={[
                    { label: '남자', value: '남자' },
                    { label: '여자', value: '여자' },
                ]}
            />
        </View>
    )
}
