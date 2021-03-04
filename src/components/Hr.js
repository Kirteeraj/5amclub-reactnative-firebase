import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export function Hr({children,style}) {
  return (
    <View style={[styles.container,style]}>
      <View style={styles.line} />
      <View>
        <Text style={styles.text}>{children}</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  text: {width: 50, textAlign: 'center', color:'black',fontWeight:'500',fontSize:15},
  line: {flex: 1, height: 1, backgroundColor: 'black',},
});
