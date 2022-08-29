import React, {useState, useEffect} from 'react'
import {View, Text, Modal, TouchableOpacity} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import CheckBox from '@react-native-community/checkbox'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {ApiFetch} from './../../../Components/API/ApiFetch'
import styles from './CompetitionResultModal.styles'
import {MedalIcon} from '../../../Assets/svgs'

const ScoreMedal = ({rank, isMedalSelected}) => {
  const medalColor = isMedalSelected
    ? {
        1: '#FFA800',
        2: '#A0A0A0',
        3: '#AF4A00',
      }[rank]
    : '#E6E6E6'
  return (
    <View style={styles.medalWrapper}>
      <Text style={styles.medalTitle}>{rank}위</Text>
      <MedalIcon
        width={20}
        height={20}
        style={styles.medalImage}
        fill={medalColor}
      />
    </View>
  )
}

const CompetitionResultModal = ({modal, openModal, data, setData, type}) => {
  const [result, setResult] = useState(modal.modal_item)
  const [isSelected, setSelection] = useState(false)
  const [validate, setValidate] = useState(false)

  const onInput = (key, e) => {
    const {text} = e.nativeEvent
    setResult({
      ...result,
      ['noAnswer']: true,
      [key]: text,
    })
  }

  useEffect(() => {
    var temp = modal.modal_item
    temp = {...temp, ['noAnswer']: false}
    setResult(temp)
    setValidate(modal.ranking != '' && modal.score != '')
    setSelection(false)
  }, [modal])

  useEffect(() => {
    if (!isSelected && (result.ranking == '' || result.score == ''))
      setValidate(false)
    else if (result.ranking != '' && result.score != '') setValidate(true)
  }, [result])

  const onMedal = rank => {
    setResult({
      ...result,
      ['ranking']: rank,
    })
  }
  const onSummit = () => {
    var temp = data
    temp.forEach((element, index) => {
      if (element && element.recordId == result.recordId) {
        temp[index] = result
      }
    })
    setData(temp)
    var api = {
      ranking: result.ranking,
      score: result.score,
      noAnswer: result.noAnswer,
    }
    if (type) {
      AsyncStorage.getItem('accessToken').then(thing => {
        ApiFetch({
          method: 'PUT',
          url: `/player/event/record/detail/${result.recordId}`,
          headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer ' + thing,
          },
          body: JSON.stringify(api),
        })
      })
    }
    openModal()
  }

  const onAnswer = () => {
    setSelection(!isSelected)
    if (!isSelected) setValidate(true)
    else if (result.ranking == '' || result.score == '') setValidate(false)
  }

  return (
    <Modal transparent={true} visible={modal.open}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalTop}>
            <View style={styles.modalTitle}>
              <Text style={styles.titleStrong}>순위</Text>
              <Text style={styles.titleNormal}>(필수 입력)</Text>
              <Text style={styles.asterisk}>*</Text>
            </View>
            <View style={styles.rankWrapper}>
              <TouchableOpacity onPress={() => onMedal('1')}>
                <ScoreMedal rank={1} isMedalSelected={'1' == result.ranking} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onMedal('2')}>
                <ScoreMedal rank={2} isMedalSelected={'2' == result.ranking} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onMedal('3')}>
                <ScoreMedal rank={3} isMedalSelected={'3' == result.ranking} />
              </TouchableOpacity>

              <View>
                <Text style={styles.rankTitle}>직접입력</Text>
                <TextInput
                  style={styles.rankInput}
                  value={result.ranking}
                  placeholder={'예) 4위-30위'}
                  placeholderTextColor="#0E0E0E66"
                  onChange={e => onInput('ranking', e)}
                />
              </View>
            </View>
            <View style={styles.scoreWrapper}>
              <Text style={styles.titleStrong}>기록, 스코어 등</Text>
              <TextInput
                style={styles.scoreInput}
                value={result.score}
                placeholder={'예) 27초 11.7'}
                placeholderTextColor="#0E0E0E66"
                onChange={e => onInput('score', e)}
              />
            </View>
            <View style={styles.checkboxWrapper}>
              <View style={styles.checkbox}>
                <CheckBox
                  value={isSelected}
                  boxType="square"
                  onValueChange={() => onAnswer()}
                />
              </View>
              <Text style={styles.checkboxLabel}>
                결과입력을 하지 않겠습니다.
              </Text>
            </View>
          </View>
          <View style={styles.modalBottom}>
            <TouchableOpacity
              onPress={() => openModal()}
              style={styles.cancelButton}>
              <Text style={styles.buttonText}> 취소</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onSummit()}
              disabled={!validate}
              style={validate ? styles.submitButton : styles.submitButtonOff}>
              <Text style={styles.buttonText}> 확인 </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default CompetitionResultModal
