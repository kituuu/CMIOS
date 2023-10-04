// import {SafeAreaView, Text, View} from 'react-native';
import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native'; // gives us a container
import Tabs from '../Components/navigation/Tabs';

export type RootStackParamList = {
  Home: undefined;
  Compress: undefined;
  Files: undefined;
  More: undefined;
};

// creating stack

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    );
  }
}

export default App;
