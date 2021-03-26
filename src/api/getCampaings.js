import firestore from '@react-native-firebase/firestore';
import {FirebaseStorageTypes} from '@react-native-firebase/storage';

export async function getCampaings() {
  const data= await firestore()
    .collection('campaigns')
    .get()
    .then(data=>{
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
      return 'error';
    });

    console.log(data);
    return data;
}
