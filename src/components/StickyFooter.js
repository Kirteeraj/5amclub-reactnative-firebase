import React from 'react';
import {View, useWindowDimensions, Text, StyleSheet} from 'react-native';
import {OutlineButton} from './OutlineButton';
import {RoundedButton} from './RoundedButton';

export function StickyFooter({backgroundColor}) {
  const windowWidth = useWindowDimensions().width;
  const HEIGHT = windowWidth * 0.17;
  const FOOTER_PADDING = windowWidth * 0.1;

  return (
    <View style={styles.container}>
      <View style={{height: 67}}>
        <Text
          allowFontScaling={false}
          style={{fontSize: 23, fontWeight: '400'}}>
          Day 1
        </Text>
        <Text
          allowFontScaling={false}
          style={{fontSize: 26, fontWeight: '400'}}>
          4:53 AM
        </Text>
      </View>
      <View style={{height: 67, flexDirection: 'column-reverse'}}>
        <OutlineButton name={'Join Meet'} style={{}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    bottom: 0,
    left: 0,
    height: 84,
    width: '100%',
    backgroundColor: '#FCE9E9',
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    elevation: 6,
  },
});
