import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Error} from '../components/Error';
import {FilledButton} from '../components/FilledButton';
import {Heading} from '../components/Heading';
import {IconButton} from '../components/IconButton';
import {Input} from '../components/Input';
import {Loading} from '../components/Loading';
import {TextButton} from '../components/TextButton';
import {AuthContext} from '../context/AuthContext';
import {login} from '../hooks/emailPasswordLogin';
import auth from '@react-native-firebase/auth';

//Google SignIN
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '71243808777-7j599dvej5uqir5aqhede12v79h5tegd.apps.googleusercontent.com',
  client_type: 3,
});

async function onGoogleButtonPress() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}
//

export function LoginScreen({navigation}) {
  // const { login } = React.useContext(AuthContext);

  const [email, setEmail] = React.useState('kirteerajmalkar@gmail.com');
  const [password, setPassword] = React.useState('kedar@2001');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>5amClub</Heading>
      {/* <IconButton name={'arrow-back'}  style={styles.backicon}/> */}
      <Error error={error} />
      <Input
        style={styles.input}
        placeholder={'Email'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <Input
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <FilledButton
        style={styles.filledbutton}
        title="Login"
        onPress={async () => {
          try {
            setLoading(true);
            await login(email, password);
          } catch (error) {
            setError(error.response.data);
            setLoading(false);
          }
        }}
      />
      <TextButton
        title="New User ? Join here"
        style={styles.textbutton}
        onPress={() => {
          navigation.navigate('Registration'); //to learn
        }}
      />
      <GoogleSigninButton
        style={{width: 380, height: 54}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        disabled={loading}
        onPress={async () => {
          try {
            setLoading(true);
            await onGoogleButtonPress();
            console.log('Google signIn success');
          } catch (error) {
            console.log(error.message);
          }
        }}
      />
      <Loading loading={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    marginBottom: 30,
    marginTop: 40,
  },
  input: {
    marginVertical: 10,
    padding: 10,
  },
  filledbutton: {
    marginTop: 10,
  },
  textbutton: {
    marginTop: 10,
  },
  backicon: {
    position: 'absolute',
    top: 20,
    left: 10,
  },
});
