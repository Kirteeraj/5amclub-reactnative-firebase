import axios from 'axios';
import {firebasefunctionsURL} from '../config';

export async function registerToCamp({data, order_id, options}) {
  var url = `${firebasefunctionsURL}/registerToCamp`;
  console.log('url:', url);
  return await axios.post(url, {
    data,
    order_id,
    options,
  });
}
