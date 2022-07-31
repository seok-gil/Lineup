import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Image, Text, Alert, TextInput, TouchableOpacity } from 'react-native';


import { DownIcon } from '../../../Assets/Icons'
import { Time } from "../../../Components/Time"

export function InquiryOne({ data }) {
  if (!data) return <View />

  const [expand, setExpand] = useState(false);
  const [answer, setAnswer] = useState(data.AnswerContent)
  const [state, setState] = useState(data.AnswerState)

  const onExpand = () => {
    setExpand(!expand);
  };

  const onInput = (e) => {
    const { text } = e.nativeEvent;
    setAnswer(text)
  }

  const onRegist = () => {
    console.log("a". state)
    setState(!state);
  };
  
  return (
    <View>
      {data.AnswerState ?
        <Text>
          답변완료 {`>`} {data.InquiryTitle}{' '}
        </Text>
        :
        <Text>
          접수 {`>`} {data.InquiryTitle}{' '}
        </Text>
      }
      <Text><Time time={data.InquiryDateTime} separator="-"/> </Text>
      <TouchableOpacity onPress={onExpand}>
        {expand ? <Image source={DownIcon} /> : <Image source={DownIcon} />}
      </TouchableOpacity>
      <View>
        {expand ?
          <View>
            <Text>Q.</Text>
            <Text>{data.InquiryContent} </Text>
            <Text>A.</Text>
            {state ?
              <View>
                <Text>
                  {answer}
                </Text>
              </View>
              :
              <View>
                <TextInput
                  value={answer}
                  placeholder={'내용을 입력해주세요.'}
                  placeholderTextColor="#0E0E0E66"
                  onChange={(e) => onInput(e)} />
              </View>
            }
            <TouchableOpacity onPress={onRegist}>
              <Text>{state ? '수정' : '등록'} </Text>
            </TouchableOpacity>
          </View>
          :
          <View />
        }
      </View>
    </View>
  );
}
