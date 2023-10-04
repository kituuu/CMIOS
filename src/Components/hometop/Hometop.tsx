/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Avatar} from '@rneui/themed';
import useProfileStore from '../../utils/profileStore';
import DonutChart from '../Donut';
const Hometop = () => {
  const freezeAll = () => {
    console.log('Freeze All');
  };
  const [viewProfile, setViewProfile] = useState(false);
  const setProfile = useProfileStore(state => state.setShow);
  const Profile = useProfileStore(state => state.show);
  return (
    <SafeAreaView style={{display: 'flex'}}>
      <View style={styles.viewtop}>
        <Image
          source={require('../../Assets/icons/logo.png')}
          style={{height: 50, width: 50, marginLeft: 10, marginTop: -8}}
        />
        <Text style={styles.compname}>Cypher Manager</Text>
        <Avatar
          size={36}
          rounded
          source={{
            // image from database will come here
            uri: 'https://media.licdn.com/dms/image/D4E03AQGI1ZJx1AywYQ/profile-displayphoto-shrink_800_800/0/1665646742212?e=1699488000&v=beta&t=Td2ujhuMGBT5UARVIpY3gbyKxmOeLF6qL7Qw7bCxhM8',
          }}
          onPress={() => {
            setViewProfile(!viewProfile);

            setProfile(!Profile);
          }}
          containerStyle={{marginLeft: 'auto', marginRight: 10}}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <View
          style={{
            // backgroundColor: 'red',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '40%',
            height: '100%',
            marginLeft: 10,
          }}>
          <DonutChart freeSpace={16} occupiedSpace={48} />
          <Text style={{color: 'white', fontSize: 16, fontWeight: '400'}}>
            Total Space - {'64 Gb'}
          </Text>
        </View>
        <View
          style={{
            height: 200,
            padding: 5,
          }}>
          <View
            style={{
              margin: 10,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View style={{backgroundColor: 'yellow', width: 20}} />
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '700',
                marginLeft: 10,
              }}>
              Occupied
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '700',
                marginLeft: 10,
                position: 'absolute',
                right: 10,
              }}>
              - {'48 GB'}
            </Text>
          </View>
          <View
            style={{
              margin: 10,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View style={{backgroundColor: '#004AAD', width: 20}} />
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: '700',
                marginLeft: 10,
              }}>
              Free
            </Text>
            <Text
              style={{
                position: 'absolute',
                color: 'white',
                fontSize: 16,
                fontWeight: '700',
                marginLeft: 10,
                right: 10,
              }}>
              - {'16 GB'}
            </Text>
          </View>
          <View
            style={{
              marginTop: 15,
              backgroundColor: '#FFDE59',
              width: '100%',
              height: '25%',
              justifyContent: 'center',
              paddingLeft: 15,
              paddingRight: 15,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              display: 'flex',
              flexDirection: 'column',
              right: -4,
            }}>
            <Text
              style={{
                paddingLeft: 13,
                fontSize: 15,
                justifyContent: 'center',
                color: '#004AAD',
                fontWeight: '600',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  color: '#004AAD',
                  fontWeight: '800',
                }}>
                25{' '}
              </Text>
              GB Space
            </Text>
            <Text
              style={{
                color: '#004AAD',
                fontSize: 13,
                fontFamily: 'Poppins',
                fontWeight: '500',
                paddingLeft: 13,
              }}>
              Compress & Free space Now
            </Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#004AAD',
              marginTop: 20,
              padding: 7,
              width: 135,
              borderRadius: 12,
            }}
            onPress={() => {
              freezeAll();
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 19,
                fontWeight: '500',
                fontFamily: 'Poppins',
              }}>
              Freeze All{' '}
              <Image
                source={require('../../Assets/icons/Compress.png')}
                resizeMode="contain"
                style={{height: 20, width: 20, tintColor: '#fff'}}
              />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Hometop;

const styles = StyleSheet.create({
  viewtop: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: '20%',
  },
  compname: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
});
