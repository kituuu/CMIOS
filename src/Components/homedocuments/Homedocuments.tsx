/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import DocCard from './Card';
import DocCardSup from './CardSup';
import files from '../../utils/constants';
import RNFS from 'react-native-fs';

const Homedocuments = () => {
  const dir = RNFS.DocumentDirectoryPath;

  return (
    <View style={styles.main}>
      {files.slice(0, 6).map((item, i) => {
        RNFS.readDir(dir + '/' + item.text).then(result => {
          item.total = result.length;
          item.filledSize = 0;
          item.freeSize = 0;
          if (result.length > 0) {
            result.forEach(element => {
              item.filledSize += element.size;
            });
          }
        });
        if (i === 0) {
          return (
            <DocCardSup
              key={i}
              fileType={item.text}
              icon={item.icon}
              text={item.text + '(' + item.total + ')'}
              filledSize={item.filledSize}
              freeSize={item.freeSize}
              wid={'45%'}
            />
          );
        }
        return (
          <DocCard
            key={i}
            fileType={item.text}
            icon={item.icon}
            text={item.text + '(' + item.total + ')'}
            filledSize={item.filledSize}
            freeSize={item.freeSize}
            wid={'45%'}
          />
        );
      })}
    </View>
  );
};

export default Homedocuments;

const styles = StyleSheet.create({
  main: {
    height: 'auto',
    zIndex: -2,
    padding: 0,
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
  },
});
