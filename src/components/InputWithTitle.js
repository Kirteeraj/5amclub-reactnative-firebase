import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';

export function InputWithTitle({title, style, ...props}) {
  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Text allowFontScaling={false} style={styles.title}>
          {title}
        </Text>
      </View>
      <TextInput
        allowFontScaling={false}
        {...props}
        style={[styles.this, style]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  this: {
    backgroundColor: '#e8e8e8',
    width: '100%',
    marginVertical: 4,
    borderRadius: 7,
    fontSize: 18,
  },
  div: {
    width: '100%',
    textAlign: 'left',
    marginBottom: 0,
  },
  title: {
    marginLeft: 3,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#EE9608',
  },
  container: {
    width: '100%',
    marginVertical: 2,
  },
});
