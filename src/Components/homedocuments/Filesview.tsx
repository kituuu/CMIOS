/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import useFilesViewStore from '../../utils/filesViewStore';
import RNFS from 'react-native-fs';
// import {request, PERMISSIONS} from 'react-native-permissions';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import {Image} from '@rneui/base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUpload} from '@fortawesome/free-solid-svg-icons';

const Filesview = () => {
  const [currentPath, setCurrentPath] = useState(RNFS.DocumentDirectoryPath);
  const setShowFiles = useFilesViewStore(state => state.setShowFiles);
  const fileCat = useFilesViewStore(state => state.fileCat);
  const fileImg = useFilesViewStore(state => state.fileImg);

  const openFile = (path: string) => {
    if (Platform.OS === 'ios') {
      RNFetchBlob.ios.previewDocument(path);
    }
  };
  const [files, setFiles]: [any, Function] = useState([]);
  const getFolders = async (path: string) => {
    (await RNFS.exists(path)) ? null : RNFS.mkdir(path);
    RNFS.readDir(path)
      .then(result => {
        setFiles(result);
      })
      .catch(err => {
        console.log(err.message, err.code);
      });
  };
  const pickDocument = async () => {
    try {
      const doc: any = await DocumentPicker.pick({
        allowMultiSelection: true,
        type: [DocumentPicker.types.allFiles],
        copyTo: 'cachesDirectory',
        presentationStyle: 'fullScreen',
        transitionStyle: 'crossDissolve',
        mode: 'import',
      });
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled the upload', error);
      } else {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getFolders(currentPath + '/' + fileCat);
  });
  return (
    <View style={styles.filesview}>
      <TouchableOpacity
        onPress={() => {
          setShowFiles(false);
        }}>
        <Text style={{fontSize: 30}}>⤬</Text>
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 18,
          fontWeight: '600',
        }}>
        {fileCat}
      </Text>

      <View style={styles.inner}>
        <FlatList
          style={{width: '100%'}}
          data={files}
          numColumns={3}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.tcview}
                onPress={() => {
                  openFile(item.path);
                }}>
                <Image
                  source={fileImg}
                  resizeMode="contain"
                  style={{height: 60, width: 60}}
                />
                <Text numberOfLines={2} style={styles.name}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}></FlatList>
      </View>
      <TouchableOpacity
        style={styles.touchableStyle3}
        onPress={() => {
          pickDocument();
        }}>
        <FontAwesomeIcon size={25} color="white" icon={faUpload} />
      </TouchableOpacity>
    </View>
  );
};

export default Filesview;

const styles = StyleSheet.create({
  filesview: {
    padding: 15,
    display: 'flex',
    position: 'absolute',
    left: '5%',
    top: '10%',
    height: '72%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    zIndex: 1,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 80,
  },
  inner: {
    marginTop: 15,
    borderTopColor: '#A0A0A0',
    borderTopWidth: 1,
  },
  tcview: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
    padding: 5,
    paddingVertical: 15,
  },
  name: {
    marginTop: 5,
    // width: '100%',
    fontSize: 16,
    fontWeight: '400',
    alignSelf: 'center',
  },
  touchableStyle3: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    backgroundColor: 'black',
    width: 60,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
