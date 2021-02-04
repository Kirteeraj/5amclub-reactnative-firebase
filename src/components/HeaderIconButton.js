import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-ionicons'
import { IconButton } from './IconButton';

export function HeaderIconButton({name, onPress}) {

    return (
      <IconButton name={name} style={styles.container} onPress={onPress} />
      );
};
 
const styles = StyleSheet.create({
      container:{
        marginRight:6,
      },
      
});

