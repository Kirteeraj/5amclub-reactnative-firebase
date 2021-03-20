import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export function OutlineButton({name,onpress,style}) {
  return (
    <TouchableOpacity onPress={onpress}>
    <View style={[styles.container,style]}>
     <Text style={[styles.text]}>{name}</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius:8,
    borderColor:'black',
    borderStyle:'solid',
    borderWidth:2,
    paddingHorizontal:14,
    height:33
},
  text: {
    fontSize: 20,
    color:'black'
},
});
