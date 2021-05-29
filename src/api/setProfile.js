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
  contribution,
) {
  if (
    name == null ||
    filePath == null ||
    intro == null ||
    place == null ||
    waNumber == null ||
    wakeUpNumber == null ||
    scrrible == null ||
    contribution == null
  ) {
    throw new Error('All Feilds are required');
  } else {
    var userId = await auth().currentUser.uid;
    var photoUrl = await uploadProfilePhoto(userId, filePath.uri);
    //var userId = '387484jlij3l4';
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
        contribution,
        photoUrl,
      })
      // .then((data)=>console.log(data))
      .then(() => {
        //console.log('UserProfile Created!');
        //Update User Name and Image
        var user = auth().currentUser;
        user.updateProfile({
          displayName: name,
          photoURL: photoUrl,
          isAnonymous: true,
        });
        //  console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
