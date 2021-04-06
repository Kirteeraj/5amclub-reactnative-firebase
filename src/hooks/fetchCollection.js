import {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

export var fetchCollection = (collection) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await firestore()
        .collection(collection)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs.map((doc) => {
            setData((d) => [...d, doc.data()]);
          });
        });
    }
    fetchData();
  }, [collection]);
  return data;
};
