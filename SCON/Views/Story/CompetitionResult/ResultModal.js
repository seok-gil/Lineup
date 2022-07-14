import React, {useState} from 'react';
import {View, Modal} from 'react-native';

import Calendar from './Calendar';

import styles from './ResultModal.styles';

function ResultModal() {
  const [calendar, setCalendar] = useState({
    open: false,
    start: '',
    end: '',
  });

  return (
    <Modal
      // animationType='slide'
      transparent={true}
      visible={calendar.open}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Calendar />
        </View>
      </View>
    </Modal>
  );
}

export default ResultModal;
