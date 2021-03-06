import storage from '@react-native-firebase/storage';

export async function uploadProfilePhoto(userId,filePath) {
  
  const reference = storage().ref(`/profilephotos/${userId}`);

  await reference.putFile(filePath);
  return await reference
  .getDownloadURL();
}
