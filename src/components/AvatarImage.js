import React from 'react';
import {Avatar} from 'react-native-paper';

export function AvatarImage({style, onPress, source, size}) {
  return (
    <Avatar.Image size={size} source={source} style={style} onPress={onPress} />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     },
// });
