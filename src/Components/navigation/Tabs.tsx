/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// screens for navigation
import Home from '../../screens/Home';
import Files from '../../screens/Files';
// import Compress from '../../screens/Compress';
import More from '../../screens/More';
import {RootStackParamList} from '../../app/App';

const Tab = createBottomTabNavigator<RootStackParamList>();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          let name: any;
          if (route.name === 'Home') {
            name = require('../../Assets/icons/Home.png');
          } else if (route.name === 'Files') {
            name = require('../../Assets/icons/Files.png');
          } else if (route.name === 'Compress') {
            name = require('../../Assets/icons/Compress.png');
          } else if (route.name === 'More') {
            name = require('../../Assets/icons/More.png');
          }

          return (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
                elevation: 10,
              }}>
              <Image
                source={name}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#1976D2' : '#748c94',
                }}
              />
              <Text style={{color: focused ? '#1976D2' : '#748c94'}}>
                {route.name}
              </Text>
            </View>
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Files" component={Files} />
      {/* <Tab.Screen name="Compress" component={Compress} /> */}
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    height: '12%',
    paddingBottom: 20,
    position: 'absolute',
    elevation: 0,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
