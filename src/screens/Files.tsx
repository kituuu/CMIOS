/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/self-closing-comp */
import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import RNFS from 'react-native-fs';

import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import {faBackward, faUpload} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Image} from '@rneui/base';

export default function Files() {
  // create a isDirectory functions which checks weather a file is folder or not by using it's extension
  const isDirectory = (name: string) => {
    if (name.includes('.')) {
      return false;
    }
    return true;
  };

  const currentPath = RNFS.DocumentDirectoryPath;
  const openFile = (path: string) => {
    if (Platform.OS === 'ios') {
      RNFetchBlob.ios.openDocument(path);
    }
  };
  const [files, setFiles]: [any, Function] = useState([]);
  const getFolders = async (path: string) => {
    RNFS.readDir(path)
      .then(result => {
        // result.sort((a, b) => {
        //   let fa = a.name.toLowerCase(),
        //     fb = b.name.toLowerCase();
        //   if (fa < fb) {
        //     return -1;
        //   }
        //   if (fa > fb) {
        //     return 1;
        //   }
        //   return 0;
        // });
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
      console.log(doc);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled the upload', error);
      } else {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getFolders(currentPath);
    // console.log(files);
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => {
          getFolders(currentPath);
        }}>
        <FontAwesomeIcon size={30} color="white" icon={faBackward} />
      </TouchableOpacity>
      <View style={styles.inner}>
        <FlatList
          style={{width: '100%', height: '100%'}}
          data={files}
          numColumns={3}
          renderItem={({item}) => {
            if (!item.name.startsWith('.')) {
              return (
                <TouchableOpacity
                  style={styles.tcview}
                  onPress={() => {
                    if (!isDirectory(item.name)) {
                      openFile(item.path);
                    } else {
                      getFolders(currentPath + '/' + item.name);
                    }
                  }}>
                  {isDirectory(item.name) ? (
                    <FileImg src={require('../Assets/icons/Folder.png')} />
                  ) : (
                    <FileImg src={require(`../Assets/icons/${'Videos'}.png`)} />
                  )}
                  <Text numberOfLines={2} style={styles.name}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            } else {
              return null;
            }
          }}></FlatList>
      </View>
      <TouchableOpacity
        style={styles.touchableStyle3}
        onPress={() => {
          pickDocument();
        }}>
        <FontAwesomeIcon size={25} color="white" icon={faUpload} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function FileImg({src}: {src: any}) {
  return (
    <Image source={src} resizeMode="contain" style={{height: 60, width: 60}} />
  );
}

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'black',
    padding: 10,
    position: 'absolute',
    borderRadius: 25,
    color: 'white',
    top: 50,
    left: 30,
  },
  main: {
    backgroundColor: '#F3F7FF',
  },
  inner: {
    marginTop: 50,
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
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'center',
  },
  touchableStyle3: {
    position: 'absolute',
    right: 30,
    bottom: 130,
    backgroundColor: 'black',
    width: 60,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
