import React from 'react';
import { Avatar } from 'react-native-paper';

export function AvatarImage({style,onPress,source}) {
  return (
    <Avatar.Image size={140} source={source} style={style} 
    onPress={onPress}
     />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     },
// });
