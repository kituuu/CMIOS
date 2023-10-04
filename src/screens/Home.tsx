/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Hometop from '../Components/hometop/Hometop';
import Homedocuments from '../Components/homedocuments/Homedocuments';
import Premium from '../Components/premium/Premium';
import useProfileStore from '../utils/profileStore';
import Profile from '../Components/profile/Profile';
import useFilesViewStore from '../utils/filesViewStore';
import Filesview from '../Components/homedocuments/Filesview';
import {FFmpegKit, ReturnCode} from 'ffmpeg-kit-react-native';

export default function Home() {
  const showFiles = useFilesViewStore(state => state.showFiles);
  const showProfile = useProfileStore(state => state.show);
  useEffect(() => {
    FFmpegKit.execute('-i file1.mov -c:v mpeg4 file2.mp4').then(
      async session => {
        const returnCode = await session.getReturnCode();
        console.log('ReturnCode: ' + returnCode);
        if (ReturnCode.isSuccess(returnCode)) {
          // SUCCESS
          console.log('Success');
        } else if (ReturnCode.isCancel(returnCode)) {
          // CANCEL
          console.log('Cancel');
        } else {
          // ERROR
          console.log('Error');
        }
      },
    );
  }, []);
  return (
    <View>
      {showProfile ? <Profile /> : ''}
      {showFiles ? <Filesview /> : ''}
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}>
        <View style={styles.topbg}>
          <Image
            source={require('../Assets/shapes/leftpoly.png')}
            style={{position: 'absolute', left: -25, top: 30}}
          />
          <Image
            source={require('../Assets/shapes/rightpoly.png')}
            style={{
              zIndex: -2,
              position: 'absolute',
              right: -10,
              bottom: -50,
            }}
          />
          <Hometop />
        </View>
        <View style={styles.main}>
          <Homedocuments />
          <Premium />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F3F7FF',
    borderRadius: 20,
    marginTop: -20,
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: '50%',
    // justifyContent: 'space-evenly',
    height: '120%',
  },
  topbg: {
    backgroundColor: '#405DBD',
    height: 380,
    overflow: 'hidden',
  },
  scrollview: {
    height: 'auto',
    backgroundColor: '#F3F7FF',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    height: 200,
  },
});
