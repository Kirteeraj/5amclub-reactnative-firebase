import React from 'react';
import {StyleSheet, View, Touchable, Button} from 'react-native';
import {Error} from '../components/Error';
import {FilledButton} from '../components/FilledButton';
import {Heading} from '../components/Heading';
import {IconButton} from '../components/IconButton';
import {Input} from '../components/Input';
import {Loading} from '../components/Loading';
import {TextButton} from '../components/TextButton';
import {login} from '../api/emailPasswordLogin';
import auth from '@react-native-firebase/auth';
import {onGoogleButtonPress} from '../api/index';
import {GoogleSigninButton} from '@react-native-community/google-signin';
import {LoginManager, AccessToken, LoginButton} from 'react-native-fbsdk';

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
            setError(error.message);
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
            setError(error.message);
            setLoading(false);
            console.log(error.message);
          }
        }}
      />
      <LoginButton
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken()
              .then((data) => {
                console.log(data.accessToken.toString());
                // try{
                // Create a Firebase credential with the AccessToken
                const facebookCredential = auth.FacebookAuthProvider.credential(
                  data.accessToken,
                );
                setLoading(true);
                auth().signInWithCredential(facebookCredential);
              })
              .catch((error) => {
                setLoading(false);
                setError(error.message);
              });
          }
        }}
        onLogoutFinished={() => console.log('logout.')}
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
