import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

export function TextButton({title, style, onPress}) {
  return (
    <TouchableOpacity style={[styles.this, style]} onPress={onPress}>
      <Text allowFontScaling={false} style={styles.text}>
        {' '}
        {title.toUpperCase()}{' '}
      </Text>{' '}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  this: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#EE9608',
    width: '100%',
    height: 46,
    borderRadius: 7,
    padding: 10,
  },
  text: {
    color: '#EE9608',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
