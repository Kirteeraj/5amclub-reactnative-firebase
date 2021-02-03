import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

export function Input({style,...props}) {

    return (
       <TextInput {...props}   style={[styles.this,style]}/>
      );
};
 
const styles = StyleSheet.create({
      this:{
         backgroundColor:'#e8e8e8',
         width:'100%',
         marginVertical:10,
         borderRadius:7,
         fontSize:18,
      },
});

