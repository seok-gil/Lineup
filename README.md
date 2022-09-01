# FrontEnd

### Commit message
 - feat : 새로운 기능과 관련된 것을 의미한다.
 - fix : 오류와 같은 것을 수정했을 때 사용한다.
 - docs : 문서와 관련하여 수정한 부분이 있을 때 사용한다.
 - style : 코드의 변화와 관련없는 포맷이나 세미콜론을 놓친 것과 같은 부분들을 의미한다.
 - refactor : 코드의 리팩토링을 의미한다.
 - test : test를 추가하거나 수정했을 때를 의미한다.
 - chore : build와 관련된 부분, 패키지 매니저 설정 등 여러가지 production code와 무관한 부분 들을 의미한다. 말 그대로 자질구레한 일들이다.
 
### 설치방법
```
  git clone https://github.com/Sportist-LineUp/FrontEnd.git && cd FrontEnd && cd SCON  // 코드 설치
  npm install // node 설치
  cd ios && pod install // ios Pod설치
```
### 빌드방법
#### android
```
  1. 폴더 확인
    android/app/src/main/assets 폴더가 있는지 확인한다. 없다면 만들어준다.
  2. android bundle 만들기
    react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
  3. apk 생성
  ./gradlew assembleRelease
```
#### IOS
```
 1. Xcode file open
  ios/SCON.xcworkspace 실행
 2. Product/Archive
```
