import firestore from "@react-native-firebase/firestore";

const userDocument = firestore.collection('users').doc('<id>').get();