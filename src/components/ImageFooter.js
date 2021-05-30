import React from 'react';
import {
  View,
  useWindowDimensions,
  Text,
  StyleSheet,
  Linking,
} from 'react-native';
import {OutlineButton} from './OutlineButton';
import {RoundedButton} from './RoundedButton';

export function ImageFooter({backgroundColor}) {
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
        <OutlineButton
          name={'Join Meet'}
          style={{}}
          onpress={() => {
            Linking.openURL('https://meet.google.com/vwp-msss-nxm');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 23,
    height: 84,
    width: '100%',
    backgroundColor: '#FCE9E9',
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    elevation: 3,
  },
});
