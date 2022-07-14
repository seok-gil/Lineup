import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import styles from './StoryElement.styles';
import {DownIcon} from '../../Assets/Icons';

const StoryElement = ({navlink, names, text, imageSrc}) => {
  return (
    <TouchableOpacity
      style={styles.storyElementWrapper}
      onPress={() =>
        navigation.navigate(navlink, {
          names,
        })
      }>
      <Image source={imageSrc} style={styles.storyIcon} />
      <View style={styles.storyTextWrapper}>
        <Text style={styles.storyText}>{text}</Text>
      </View>
      <Image source={DownIcon} style={styles.rightIcon} />
    </TouchableOpacity>
  );
};

export default StoryElement;
