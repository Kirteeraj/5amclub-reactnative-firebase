import firestore from '@react-native-firebase/firestore';

export function getRefData(ref) {
  // console.log('Ref', campRef);
  return ref
    .get()
    .then((data) => {
      // console.log('CampData', data.data());
      return data.data();
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
}
