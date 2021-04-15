import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export function RoundedButton({label, onPress}) {
  return (
    <TouchableOpacity
      style={{alignItems: 'center', justifyContent: 'center'}}
      onPress={onPress}>
      <Text
        allowFontScaling={false}
        style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
