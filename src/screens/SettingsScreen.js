import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Heading} from '../components/Heading';
import Icon from 'react-native-ionicons';
import {IconButton} from '../components/IconButton';
import {logout} from '../api/index';

export function SettingsScreen() {
  const {colors} = useTheme();
  return (
    <View style={[styles.container]}>
      <Button title={'logout'} onPress={logout} />
    </View>
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
