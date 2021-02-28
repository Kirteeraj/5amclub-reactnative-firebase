import auth from '@react-native-firebase/auth';

export function register(email, password) {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
      var user = auth().currentUser;
      user
        .sendEmailVerification()
        .then(function () {
          // Email sent.
          console.log('Email Sent');
        })
        .catch(function (error) {
          // An error happened.
          console.log(error.code);
        });
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
}

export function login(email, password) {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      throw error;
    });
}

export function logout() {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
}
