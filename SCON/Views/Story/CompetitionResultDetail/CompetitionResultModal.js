import React, {useState} from 'react';
import {View, Text, Image, Modal, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

import styles from './CompetitionResultModal.styles';
import {
  BronzeMedalImage,
  SilverMedalImage,
  GoldMedalImage,
  GrayMedalImage,
} from '../../../Assets/Images';

const ScoreMedal = ({rank, isMedalSelected}) => {
  const medalImage = isMedalSelected
    ? {
        1: GoldMedalImage,
        2: SilverMedalImage,
        3: BronzeMedalImage,
      }[rank]
    : GrayMedalImage;
  return (
    <View style={styles.medalWrapper}>
      <Text style={styles.medalTitle}>{rank}위</Text>
      <Image style={styles.medalImage} source={medalImage} />
    </View>
  );
};

const CompetitionResultModal = ({modal, openModal, isSelected}) => {
  return (
    <Modal
      // animationType='slide'
      transparent={true}
      visible={modal.open}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalTop}>
            <View style={styles.modalTitle}>
              <Text style={styles.titleStrong}>순위</Text>
              <Text style={styles.titleNormal}>(필수 입력)</Text>
              <Text style={styles.asterisk}>*</Text>
            </View>
            <View style={styles.rankWrapper}>
              <ScoreMedal rank={1} />
              <ScoreMedal rank={2} />
              <ScoreMedal rank={3} />
              <View>
                <Text style={styles.rankTitle}>직접입력</Text>
                <TextInput
                  style={styles.rankInput}
                  value={modal.open}
                  placeholder={'예) 4위-30위'}
                  placeholderTextColor="#0E0E0E66"
                  openModal={() => openModal('search')}></TextInput>
              </View>
            </View>
            <View style={styles.scoreWrapper}>
              <Text style={styles.titleStrong}>기록, 스코어 등</Text>
              <TextInput
                style={styles.scoreInput}
                value={modal.open}
                placeholder={'예) 27초 11.7'}
                placeholderTextColor="#0E0E0E66"
                onChange={() => openModal('search')}></TextInput>
            </View>
            <View style={styles.checkboxWrapper}>
              <View style={styles.checkbox}>
                <CheckBox
                  value={isSelected}
                  onValueChange={() => openModal('search')}
                />
              </View>
              <TouchableOpacity onPress={() => openModal()}>
                <Text style={styles.checkboxLabel}>
                  결과입력을 하지 않겠습니다.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.modalBottom}>
            <TouchableOpacity
              onPress={() => openModal()}
              style={styles.cancelButton}>
              <Text style={styles.buttonText}> 취소</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => openModal()}
              style={styles.submitButton}>
              <Text style={styles.buttonText}> 확인 </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CompetitionResultModal;
