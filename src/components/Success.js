import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {DefaultTheme} from 'react-native-paper';

export function Success({success}) {
  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.text}>
        {' '}
        {success}{' '}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#09B610',
  },
});
