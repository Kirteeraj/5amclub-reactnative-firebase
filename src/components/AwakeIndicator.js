import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export function AwakeIndicator() {

    return (
       <View style={styles.container}>
           <Text style={styles.text}>Awake</Text>
       </View>
      );
};
 
const styles = StyleSheet.create({
      container:{
        backgroundColor:'#09B610',
        width:79,
        height:27,
        borderRadius:5,
        alignItems:'center',
      },
      text:{
        fontSize:22,
      }
});