import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export function Heading({children, style, ...props}) {
  return (
    <Text allowFontScaling={false} {...props} style={[styles.text, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#EE9608',
  },
});
