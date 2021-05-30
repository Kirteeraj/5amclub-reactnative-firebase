import storage from '@react-native-firebase/storage';

export async function uploadProfilePhoto(userId, filePath) {
  const reference = storage().ref(`/profilephotos/${userId}`);

  await reference.putFile(filePath);
  return await reference.getDownloadURL();
}

export async function updateProfilePhoto(userId, filePath) {
  const reference = storage().ref(`/profilephotos/${userId}`);

  await reference.delete();
  await reference.putFile(filePath);

  return await reference.getDownloadURL();
}

// export function test(userId, filePath) {
//   console.log('Test caled');
//   const reference = storage().ref(`/profilephotos/${userId}`);

//   reference.delete().then((result) => {
//     console.log(result);
//     reference.putFile(filePath).then((result) => {
//       console.log(result);
//     });
//   });
// }
