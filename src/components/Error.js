import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export function Error({error}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {error} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'red',
  },
});
