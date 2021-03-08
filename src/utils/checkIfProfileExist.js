import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export async function checkIfProfileExist(){
    var userId = await auth().currentUser.uid;
    var result = await firestore()
    .collection('users')
    .doc(userId)
    .get().then((data)=>
    console.log('data:',data)
    );
    console.log('result:',result);
    return await result
}