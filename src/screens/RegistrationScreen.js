import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Error} from '../components/Error';
import {FilledButton} from '../components/FilledButton';
import {Heading} from '../components/Heading';
import {IconButton} from '../components/IconButton';
import {Input} from '../components/Input';
import {Loading} from '../components/Loading';
import {register} from '../api/emailPasswordLogin';

export function RegistrationScreen({navigation}) {
  // const {register} = React.useContext(AuthContext);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('kirteerajmalkar@gmail.com');
  const [password, setPassword] = React.useState('kedar@2001');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  return (
    <View style={styles.container}>
      <Heading style={styles.title}>5amClub</Heading>

      <Error error={error} />

      <IconButton
        name={'arrow-back'}
        style={styles.backicon}
        onPress={() => {
          navigation.pop();
        }}
      />

      {/* <Input
        style={styles.input}
        placeholder={'Name'}
        value={name}
        onChangeText={setName}
      /> */}

      <Input
        style={styles.input}
        value={email}
        placeholder={'Email'}
        keyboardType={'email-address'}
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
        title="Register"
        onPress={async () => {
          try {
            setLoading(true);
            await register(email, password);
            navigation.pop();
          } catch (e) {
            setError(e.message);
            setLoading(false);
            console.log(e);
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
    marginVertical: 5,
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
    top: 5,
    left: 7,
  },
});
