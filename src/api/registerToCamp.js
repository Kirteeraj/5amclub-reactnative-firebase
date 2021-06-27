import axios from 'axios';
import {firebasefunctionsURL} from '../config';

export async function registerToCamp({data, order_id, options}) {
  var url = `${firebasefunctionsURL}/registerToCamp`;
  console.log('url:', url);
  //Write piece of code to suscribe to topic:Current Camp updates;
  return await axios.post(url, {
    data,
    order_id,
    options,
  });
}

//Check if register to camp also adds active camp in user profile
