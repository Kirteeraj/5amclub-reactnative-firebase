import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

export function Loading({loading,style}) {
    if(!loading){
        return <View/>
    }

    return (
       <View style={[style,styles.overlay]}>
           <View style={styles.container}>
               <ActivityIndicator color={'black'} />
               <Text style={styles.text}>Please wait </Text>
           </View>
       </View>
      );
};
 
const styles = StyleSheet.create({
      overlay:{
          ...StyleSheet.absoluteFill,
          backgroundColor:'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems:'center'
      },
      container:{
        backgroundColor:'white',
        padding:18,
        flexDirection:'row',
        borderRadius:8
      },
      text:{
        marginLeft:8,
        fontSize:15,
        fontWeight:'500',
        color:'black'
      }
});

