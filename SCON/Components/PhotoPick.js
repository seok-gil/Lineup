import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { PhotoIcon } from '../Assets/Icons';

import Amplify, { Storage } from 'aws-amplify';
import awsconfig from '../src/aws-exports';

const DEFAULT_STYLE = {
  photoPickWrapper: {},
  photoPickImage: {},
  photoPickTouchable: {},
};

// export function PhotoPick({ text, photo, setPhoto, styles = DEFAULT_STYLE }) {
  // const [progressText, setProgressText] = useState('');
  // const [isLoading, setisLoading] = useState(false);


//   const fetchResourceFromURI = async uri => {
//     const response = await fetch(uri);
//     console.log(response);
//     const blob = await response.blob();
//     return blob;
//   };

//   const uploadResource = async () => {
//     if (isLoading) return;
//     setisLoading(true);
//     const img = await fetchResourceFromURI(photo);
//     return Storage.put(photo, img, {
//       level: 'public',
//       contentType: 'photo',
//       progressCallback(uploadProgress) {
//         setProgressText(
//           `Progress: ${Math.round(
//             (uploadProgress.loaded / uploadProgress.total) * 100,
//           )} %`,
//         );
//         console.log(
//           `Progress: ${uploadProgress.loaded}/${uploadProgress.total}`,
//         );
//       },
//     })
//       .then(res => {
//         setProgressText('Upload Done: 100%');
//         setAsset(null);
//         setisLoading(false);
//         Storage.get(res.key)
//           .then(result => console.log(result))
//           .catch(err => {
//             setProgressText('Upload Error');
//             console.log(err);
//           });
//       })
//       .catch(err => {
//         setisLoading(false);
//         setProgressText('Upload Error');
//         console.log(err);
//       });
//   };


//   const onClick = () => {
//     Alert.alert(
//       text,
//       '',
//       [
//         {
//           text: '앨범에서 선택',
//           onPress: async () => {
//             const result = await launchImageLibrary();
//             if (result.didCancel) {
//               return null;
//             }
//             const localUri = result.assets[0].uri;
//             const uriPath = localUri.split('//').pop();
//             const imageName = localUri.split('/').pop();
//             setPhoto('file://' + uriPath);
//           },
//         },
//         {
//           text: '카메라로 찍기',
//           onPress: async () => {
//             const result = await launchCamera({
//               mediaType: 'photo',
//               cameraType: 'back',
//             });
//             if (result.didCancel) {
//               return null;
//             }
//             const localUri = result.assets[0].uri;
//             const uriPath = localUri.split('//').pop();
//             const imageName = localUri.split('/').pop();
//             setPhoto('file://' + uriPath);
//           },
//         },
//       ],
//       { cancelable: false },
//     );
//   };
//   return (
//     <View style={styles.photoPickWrapper}>
//       <TouchableOpacity onPress={uploadResource}>
//         <Text style={styles.button}>UPLOAD</Text>
//       </TouchableOpacity>
//       <Text>{progressText}</Text>
//       <TouchableOpacity onPress={onClick} style={styles.photoPickTouchable}>
//         <Image source={PhotoIcon} style={styles.photoPickImage} />
//       </TouchableOpacity>
//     </View>
//   );
// }

//       // <TouchableOpacity onPress={() => setAsset(null)}>
//       //   <Text style={styles.cancelButton}>Remove Selected Image</Text>
//       // </TouchableOpacity>

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    color: '#fff',
    backgroundColor: 'blue',
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#fff',
    color: 'blue',
  },
  selectedImage: {
    width: 175,
    height: 200,
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// export function PhotoPick({ text, photo, setPhoto, styles = DEFAULT_STYLE }) {
function S3StorageUpload() {
  Amplify.configure(awsconfig);
  const [progressText, setProgressText] = useState('');
  const [isLoading, setisLoading] = useState(false);

  const [asset, setAsset] = useState(null);
  const selectFile = async () => {
    await launchImageLibrary({ mediaType: 'mixed' }, result => {
      if (!result.assets) {
        Alert.alert(result.errorMessage);
        return;
      }
      setAsset(result.assets[0]);
    });
  };
  
  const fetchResourceFromURI = async uri => {
    const response = await fetch(uri);
    console.log(response);
    const blob = await response.blob();
    return blob;
  };
  const uploadResource = async () => {
    if (isLoading) return;
    setisLoading(true);
    const img = await fetchResourceFromURI(asset.uri);
    return Storage.put(asset.uri, img, {
      level: 'public',
      contentType: asset.type,
      progressCallback(uploadProgress) {
        setProgressText(
          `Progress: ${Math.round(
            (uploadProgress.loaded / uploadProgress.total) * 100,
          )} %`,
        );
        console.log(
          `Progress: ${uploadProgress.loaded}/${uploadProgress.total}`,
        );
      },
    })
      .then(res => {
        setProgressText('Upload Done: 100%');
        setAsset(null);
        setisLoading(false);
        Storage.get(res.key)
          .then(result => console.log(result))
          .catch(err => {
            setProgressText('Upload Error');
            console.log(err);
          });
      })
      .catch(err => {
        setisLoading(false);
        setProgressText('Upload Error');
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={selectFile}>
        <Text style={styles.button}>SELECT {asset ? 'ANOTHER' : ''} FILE</Text>
      </TouchableOpacity>
      {asset ? (
        asset.type.split('/')[0] === 'image' ? (
          <Image
            style={styles.selectedImage}
            source={{ uri: asset?.uri ?? '' }}
          />
        ) : (
          <Video
            style={styles.selectedImage}
            source={{ uri: asset?.uri ?? '' }}
          />
        )
      ) : null}
      {asset && (
        <>
          <TouchableOpacity onPress={uploadResource}>
            <Text style={styles.button}>UPLOAD</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setAsset(null)}>
            <Text style={styles.cancelButton}>Remove Selected Image</Text>
          </TouchableOpacity>
        </>
      )}
      <Text>{progressText}</Text>
    </View>
  );
}
// Storage.configure({ level: 'private' });

export default S3StorageUpload;
