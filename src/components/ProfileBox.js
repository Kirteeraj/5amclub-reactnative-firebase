import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {AvatarImage} from './AvatarImage';
import { AwakeIndicator } from './AwakeIndicator';

export function ProfileBox() {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <AvatarImage size={120} style={{marginTop: 20}} />
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignContent: 'center',
            backgroundColor: 'grey',
          }}>
          <Text style={styles.name}>Kirteeraj Malkar</Text>
          <Text style={styles.intro}>Creative Developer</Text>
          <AwakeIndicator/>
        </View>
      </View>
      <View style={styles.footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#E5E5E5',
    width: '90%',
    height: 203,
    position: 'absolute',
    borderRadius: 8,
    //shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 159,
  },
  footer: {
    height: 44,
    width: '100%',
    backgroundColor: 'rgba(239, 151, 151, 0.19)',
  },
  name: {
    width: 208,
    height: 29,
    marginTop: 18,
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Roboto',
    lineHeight: 29,
  },
  intro: {
    width: 211,
    height: 23,
    fontSize: 18,
    textAlign: 'center',
  },
});
