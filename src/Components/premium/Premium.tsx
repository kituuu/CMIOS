import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Premium = () => {
  const upgrade = () => {
    console.log('Upgrade kar diya bro');
  };
  return (
    <View style={styles.premiumcard}>
      <View style={styles.upgradetextview}>
        <Text style={styles.upgradetextheading}>Go Premium</Text>
        <Text style={styles.upgradetext}>Get Unlimited Space now</Text>
      </View>
      <TouchableOpacity style={styles.upgrade} onPress={upgrade}>
        <Text style={styles.upgradebtntext}>Upgrade</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Premium;

const styles = StyleSheet.create({
  premiumcard: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#597EF8',
    marginHorizontal: 10,
    height: '10%',
    padding: 20,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginRight: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.35,
    shadowRadius: 5,
  },
  upgrade: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  upgradetextview: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-around',
  },
  upgradetext: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
  },
  upgradetextheading: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
  },
  upgradebtntext: {
    color: '#3A87E9',
    fontWeight: '600',
    fontSize: 16,
  },
});
