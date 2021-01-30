import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Error } from '../components/Error';
import { FilledButton } from '../components/FilledButton';
import { Heading } from '../components/Heading';
import { IconButton } from '../components/IconButton';
import { Input } from '../components/Input';
import { TextButton } from '../components/TextButton';

export function RegistrationScreen({navigation}) {

    return (
       <View style={styles.container}>
  
           <Heading style={styles.title}>5amClub</Heading>
           {/* <IconButton name={'arrow-back'}  style={styles.backicon}/> */}
           <Error error={""}/>
           <IconButton name={'arrow-back'} style={styles.backicon} 
           onPress={
               ()=>{
                navigation.pop();
               }
           }/>
          <Input
           style={styles.input}
            placeholder={'Email'} 
            keyboardType={'email-address'}
            />
          <Input style={styles.input} placeholder={'Password'}  secureTextEntry />
          <FilledButton style={styles.filledbutton} title="Register"/>
         
          
       </View>
      );
};
 
const styles = StyleSheet.create({
      container:{
        flex: 1,
        alignItems:'center',
        paddingTop:20,
        padding:20,
        backgroundColor:'white',
      },
      title:{
        marginBottom:30,
        marginTop:40,
      },
      input:{
        marginVertical:10,
        padding:10,
      },
      filledbutton:{
        marginTop:10,
      },
      textbutton:{
        marginTop:10,
      },
      backicon:{
        position:'absolute',
        top:5,
        left:7,
      }
});
 
