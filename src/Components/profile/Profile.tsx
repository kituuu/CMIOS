/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import useProfileStore from '../../utils/profileStore';
import {Avatar} from '@rneui/base';

const Profile = () => {
  const Billing = () => {
    console.log('Billing History');
  };
  const Support = () => {
    console.log('Get Sumport');
  };
  const [spaceInfo, _setSpaceInfo] = useState({spacefreed: '25', freeup: '40'});
  const [user, _setUser] = useState({
    img: 'https://media.licdn.com/dms/image/D4E03AQGI1ZJx1AywYQ/profile-displayphoto-shrink_800_800/0/1665646742212?e=1699488000&v=beta&t=Td2ujhuMGBT5UARVIpY3gbyKxmOeLF6qL7Qw7bCxhM8',
    name: 'Karthik Ayangar',
    email: 'karthik_a@ee,.iitr.ac.in',
    phone: '9889786756',
    membership: 'Epic',
  });
  const setShowProfile = useProfileStore(state => state.setShow);
  const showProfile = useProfileStore(state => state.show);
  return (
    <ScrollView style={styles.scrollviewprofile}>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            setShowProfile(!showProfile);
          }}>
          <Text style={styles.collapse}>{'>>'}</Text>
        </TouchableOpacity>
        <View style={styles.main}>
          <Avatar
            size={120}
            rounded
            source={{
              // image from database will come here
              uri: user.img,
            }}
            containerStyle={styles.avatar}
          />
          <Text style={styles.name}>{'Karthik Ayangar'}</Text>
        </View>
        <View style={styles.infosection}>
          <Text style={styles.infotext}>
            Email{'\n'}
            {user.email}
          </Text>
          <Text style={styles.infotext}>
            Phone Number{'\n'}
            {user.phone}
          </Text>
        </View>
        <View style={styles.membershipsec}>
          <Text style={{fontSize: 18}}>Membership</Text>
          <Text
            style={{
              paddingTop: 10,
              fontSize: 14,
              color: '#004AAD',
              fontWeight: '600',
              fontFamily: 'Montserrat',
            }}>
            {user.membership} Member
          </Text>
          <Text style={{fontSize: 16, paddingTop: 10}}>Space Freed Up</Text>
          <Text
            style={{
              paddingTop: 10,
              fontSize: 14,
              color: '#004AAD',
              fontWeight: '400',
              fontFamily: 'Montserrat',
            }}>
            {spaceInfo.spacefreed} GB{' '}
          </Text>
          <Text style={{fontSize: 16, paddingTop: 10}}>Free Up Space </Text>
          <Text
            style={{
              paddingTop: 10,
              fontSize: 14,
              color: '#004AAD',
              fontWeight: '400',
              fontFamily: 'Montserrat',
            }}>
            {spaceInfo.freeup} GB{' '}
          </Text>
          <TouchableOpacity style={{paddingTop: 30}} onPress={Billing}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                fontFamily: 'Montserrat',
              }}>
              ⏲ Billing History
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{paddingTop: 30}} onPress={Support}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '400',
                fontFamily: 'Montserrat',
              }}>
              🎧 Get Support
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  membershipsec: {
    paddingVertical: 15,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 10,
    width: '100%',
  },
  infosection: {
    paddingVertical: 15,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 10,
    borderBlockColor: '#A0A0A0',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    // height: '40%',
    // height: 200,
    width: '100%',
  },
  infotext: {
    paddingVertical: 8,

    verticalAlign: 'middle',
    lineHeight: 25,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Montserrat',
    color: '#2E2D2D',
  },
  name: {
    lineHeight: 21,
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Poppins',
    paddingTop: 10,
  },
  main: {
    // paddingTop: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    // height: '100%',
  },
  avatar: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  collapse: {
    color: '#2E2D2D',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Consolas',
  },
  scrollviewprofile: {
    padding: 20,
    paddingTop: 0,
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '60%',
    backgroundColor: '#fff',
    zIndex: 1,
  },
});
