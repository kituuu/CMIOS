import {ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function More() {
  return (
    <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.main}>
        <Text>More</Text>
      </SafeAreaView>
    </ScrollView>
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
    // height: '120%',
  },
  scrollview: {
    height: '100%',
    backgroundColor: '#F3F7FF',
  },
});
