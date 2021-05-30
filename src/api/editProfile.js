import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {updateProfilePhoto} from './storageBucket';

export async function editProfile(
  name,
  filePath,
  intro,
  place,
  waNumber,
  wakeUpNumber,
  scrrible,
  contribution,
  isPhotoNew = true,
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
    var photoUrl;
    if (isPhotoNew) {
      photoUrl = await updateProfilePhoto(userId, filePath.uri);
    } else {
      photoUrl = filePath.uri;
    }
    //var userId = '387484jlij3l4';
    console.log('isPhotoNew', isPhotoNew);
    await firestore()
      .collection('users')
      .doc(userId)
      .update({
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
        console.log('UserProfile Updated!');
        //Update User Name and Image
        // var user = auth().currentUser;
        // user.updateProfile({
        //   photoURL: photoUrl,
        //   isAnonymous: true,
        // });
        // //  console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
