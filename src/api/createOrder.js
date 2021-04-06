import axios from 'axios';
import {firebasefunctionsURL} from '../config';

export async function createOrder({campaignId, uid}) {
  var url = `${firebasefunctionsURL}/createOrder?campaignId=${campaignId}&uid=${uid}`;
  console.log('url:', url);
  return await axios.get(url);
}
