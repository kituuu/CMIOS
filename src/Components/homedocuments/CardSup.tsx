/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import useFilesViewStore from '../../utils/filesViewStore';

interface Props {
  wid: string;
  icon: any;
  text: string;
  filledSize: number;
  freeSize: number;
  fileType: string;
}

const DocCardSup = ({icon, text, filledSize, freeSize, fileType}: Props) => {
  const setShowFiles = useFilesViewStore(state => state.setShowFiles);
  const setFileImg = useFilesViewStore(state => state.setFileImg);
  const setFileCat = useFilesViewStore(state => state.setFileCat);
  const set = () => {
    setShowFiles(true);
    setFileCat(fileType);
    setFileImg(icon);
  };
  const convertBytesToSize = (bytes: number) => {
    const megabytes = bytes / (1024 * 1024); // 1 MB = 1024 KB, 1 KB = 1024 bytes

    if (megabytes < 100) {
      return `${megabytes.toFixed(2)} MB`;
    } else {
      const gigabytes = megabytes / 1024; // 1 GB = 1024 MB
      return `${gigabytes.toFixed(2)} GB`;
    }
  };
  return (
    <TouchableOpacity style={styles.main} onPress={set}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{height: 32, width: 32, paddingHorizontal: 10}}
      />
      <View style={styles.textleft}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.text}> {convertBytesToSize(filledSize)}</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.textblue}>{'Free Space'}</Text>
          <Text style={styles.textblue}>{freeSize} GB</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 81,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    paddingHorizontal: 6,
    width: '94%',
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  textleft: {
    margin: 0,
    paddingVertical: 12,
    paddingLeft: 5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  text: {fontSize: 13, fontWeight: '500', marginTop: 9},
  textblue: {fontSize: 13, fontWeight: '500', color: '#004AAD'},
});

export default DocCardSup;
