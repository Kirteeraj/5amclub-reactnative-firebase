import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Heading} from '../components/Heading';
import Icon from 'react-native-ionicons';
import {IconButton} from '../components/IconButton';

export function SplashScreen() {
  const {colors} = useTheme();
  return (
    <>
      <StatusBar backgroundColor={'EE9608'} />
      <View style={[styles.container, {backgroundColor: '#EE9608'}]}>
        <Icon name={'flower'} style={styles.heading} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    marginTop: '75%',
    fontSize: 100,
    fontWeight: '700',
  },
});
