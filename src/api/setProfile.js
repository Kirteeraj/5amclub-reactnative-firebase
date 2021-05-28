import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {uploadProfilePhoto} from './storageBucket';

export async function setProfile(
  name,
  filePath,
  intro,
  place,
  waNumber,
  wakeUpNumber,
  scrrible,
  cotributaion,
) {
  if (
    name ||
    filePath ||
    intro ||
    place ||
    waNumber ||
    wakeUpNumber ||
    scrrible ||
    cotributaion === null
  ) {
    throw new Error('All Feilds are required');
  } else {
    var userId = await auth().currentUser.uid;
    console.log(filePath);
    var photoUrl = await uploadProfilePhoto(userId, filePath.uri);
    //var userId = '387484jlij3l4';
    console.log('photoUrl', photoUrl);
    await firestore()
      .collection('users')
      .doc(userId)
      .set({
        userId,
        name,
        intro,
        place,
        waNumber,
        wakeUpNumber,
        scrrible,
        cotributaion,
        photoUrl,
      })
      // .then((data)=>console.log(data))
      .then(() => {
        console.log('UserProfile Created!');
        //Update User Name and Image
        var user = auth().currentUser;
        user.updateProfile({
          displayName: name,
          photoURL: photoUrl,
          isAnonymous: true,
        });
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
