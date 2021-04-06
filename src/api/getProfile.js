import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export function getProfile() {
  return firestore()
    .collection('users')
    .doc(auth().currentUser.uid)
    .get()
    .then((data) => {
      console.log('11', data.data());
      return data.data();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
