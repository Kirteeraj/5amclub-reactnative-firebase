import React from 'react';
import axios from 'axios';
import {
  BASE_URL
} from '../config';
import SecureStorage from 'react-native-secure-storage';

let axiosConfig = {
  headers: {
    enctype: 'multipart/form-data',
    'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RtYW4xQGdtYWlsLmNvbSIsImlhdCI6MTYxMjg4ODMxMn0.8TxBKfnHzPKO5tIYQvlZUw5ixOmufM7bVnYKLu1iWDc',
    'accept-encoding': 'gzip, deflate, br',
  },
};

export const setProfileData = async (
  filePath,
  intro,
  place,
  waNumber,
  wakeupNumber,
  scrrible,
) => {
  var postData = new FormData();
  postData.append('image', {
    uri: filePath.uri,
    type: filePath.type,
    name: filePath.fileName,
  });
  postData.append('intro',intro);
  postData.append('place',place);
  postData.append('waNumber',waNumber);
  postData.append('wakeupNumber',wakeupNumber);
  postData.append('scrrible',scrrible);
  await axios.post(`${BASE_URL}/profile/setProfile`, postData, axiosConfig);
};