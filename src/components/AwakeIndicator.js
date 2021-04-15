import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export function AwakeIndicator({awake = true}) {
  var data = awake
    ? {
        bgColor: '#09B610',
        text: 'Awake',
      }
    : {
        bgColor: '#F04D4D',
        text: 'Sleeping',
      };
  return (
    <View style={[styles.container, {backgroundColor: data.bgColor}]}>
      <Text allowFontScaling={false} style={styles.text}>
        {data.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingVertical: 0.5,
    paddingHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    lineHeight: 25,
  },
});
