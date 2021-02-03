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
import { AuthContext } from '../context/AuthContext';

export function LoginScreen({navigation}) {

    const { login } = React.useContext(AuthContext);

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");
  

    return (
       <View style={styles.container}>
  
           <Heading style={styles.title}>5amClub</Heading>
           {/* <IconButton name={'arrow-back'}  style={styles.backicon}/> */}
           <Error error={""}/>
          <Input
           style={styles.input}
            placeholder={'Email'} 
            keyboardType={'email-address'}
            value={email}
            onChangeText={email=>setEmail(email)}
            />
          <Input style={styles.input} placeholder={'Password'} secureTextEntry 
          value={password}
          onChangeText={setPassword}
          />
          <FilledButton style={styles.filledbutton} title="Login"
          onPress={async ()=>{
            try{
            setLoading(true)
            await login(email,password);
            } catch(e){
            setError(e.message);
            setLoading(false);
            console.log(e);
            }
          }}/>
          <TextButton title='Join 5am club ?' style={styles.textbutton}
          onPress={()=>{
            navigation.navigate('Registration');//to learn
          }}
          />
          
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
        top:20,
        left:10,
      }
});
 
