import React, {Component, useState} from 'react';
import {View, Image, Text} from 'react-native';

import {PhotoPick} from '../../../Components/PhotoPick';
import ProfileInfoScreenElement from './ProfileInfoScreenElement';
import {profile as data} from '../../../Assets/Data/Profile.json';

import {DefaultProfileImage, SwimmingBackground} from '../../../Assets/Images';
import styles from './ProfileInfoScreen.styles';
import {
  backgroundPhotoPickStyles,
  profilePhotoPickStyles,
} from './MypagePhotoPick.styles';

export function ProfileInfoScreen({navigation}) {
  const [userPhoto, setUserPhoto] = useState(DefaultProfileImage);
  const [backPhoto, setBackPhoto] = useState(SwimmingBackground);

  return (
    <View style={styles.profileScreenWrapper}>
      <View style={styles.profileImageWrapper}>
        <View style={styles.profileBackground}>
          <Image source={backPhoto} style={styles.backgroundPhoto} />
          <PhotoPick
            styles={backgroundPhotoPickStyles}
            text="배경 이미지 설정"
            setPhoto={setBackPhoto}
          />
        </View>
        <View style={styles.profileImage}>
          <View style={styles.profileImageRelative}>
            <Image source={userPhoto} style={styles.profilePhoto} />
            <PhotoPick
              styles={profilePhotoPickStyles}
              text="프로필 이미지 설정"
              setPhoto={setUserPhoto}
            />
          </View>
        </View>
      </View>
      <View style={styles.formSection}>
        <ProfileInfoScreenElement label="이름" text={data.name} />
        <ProfileInfoScreenElement label="이메일 계정" text={data.email} />
        <ProfileInfoScreenElement label="생년월일" text={data.birth} />
        <ProfileInfoScreenElement label="성별" text={data.sex} />
        <ProfileInfoScreenElement label="종목" text={data.major} />
        <ProfileInfoScreenElement label="소속" text={data.belong} />
      </View>
    </View>
  );
}
