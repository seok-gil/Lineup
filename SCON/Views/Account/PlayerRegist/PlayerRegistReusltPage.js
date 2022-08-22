import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import {RegistAcceptIcon, RegistPendingIcon} from '../Assets'
import {DeniedIcon} from '../../../Assets/svgs'
import styles from './PlayerRegistResultPage.styles'

export function PlayerRegistResultPage({data, navigation, code}) {
  const [type, setType] = useState(code)

  const image =
    {
      0: <RegistPendingIcon width={100} height={100} fill="#17D3F0" />,
      1: <RegistAcceptIcon width={100} height={100} fill="#17D3F0" />,
      2: <DeniedIcon width={100} height={100} fill="#17D3F0" />,
    }[code] && null

  const head =
    code >= 0
      ? {
          0: '선수 등록 정보를\n심사하고 있습니다.',
          1: '선수 인증이\n승인되었습니다.',
          2: '선수 인증 신청이\n반려되었습니다.',
        }[code]
      : ''

  const board =
    code >= 0
      ? {
          0: '잠시만 기다려주세요!',
          1: '회원님의 계정이 선수 계정으로 전환되었어요!',
          2: '반려 된 이유를 확인하시고 재등록 해주세요.',
        }[code]
      : ''

  const content =
    code >= 0
      ? {
          0: '심사는 3~5일이 소요됩니다.\n팬들과의 만남이 얼마 남지 않았어요{`><!`}',
          1: '선수 계정만이 가진 특별한 기능을 통해 팬들과 더욱 자유롭게 소통하실 수 있어요! \n\n앞으로 라인업+와 함께 그려나갈 멋진 선수님의 모습 기대할께요^^',
        }[code]
      : ''

  if (code == 2) content = `반려 사유: ${data.refuseContent}`

  const onPress = () => {
    navigation.navigate('PlayerRegist')
  }
  return (
    <View style={styles.playerRegistResultWrapper}>
      <View style={styles.playerRegistInner}>
        <View style={styles.playerRegistTop}>
          {image}
          <Text style={styles.title}>{head}</Text>
          <Text style={styles.subtitle}>{board}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
        {code == 2 && (
          <TouchableOpacity onPress={() => onPress()} style={styles.button}>
            <Text style={styles.buttonText}>재등록</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
