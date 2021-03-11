import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-ionicons'

export function IconButton({name,style, onPress,color='#EE9608'}) {

    return (
      <TouchableOpacity style={[styles.this,style]} onPress={onPress}>
          <Icon name={name} style={[styles.Icon,{color:color}]} ></Icon>
      </TouchableOpacity>
      );
};
 
const styles = StyleSheet.create({
      this:{
          fontWeight:'bold',
          fontSize:50,
          color:'#EE9608',
          height:46,
          borderRadius:7,
          padding:10,
      },
      Icon:{
        color:'#EE9608',
      }
      
});

