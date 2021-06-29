import {razorpaykeyId} from '../config';
import RazorpayCheckout from 'react-native-razorpay';
import auth from '@react-native-firebase/auth';
import {getProfile, createOrder, registerToCamp} from '../api/index';

export async function razorpayPay(data, reload, setLoading) {
  var userProfile = await getProfile();
  var user = auth().currentUser;
  var order = await createOrder({campaignId: data.id, uid: user.uid});
  // console.log(order.data.id);
  var options = {
    description: 'Regestration fee for following camp',
    order_id: order.data.id,
    image: data.imageLink,
    currency: 'INR',
    key: razorpaykeyId, // Your api key
    amount: data.fees,
    name: data.name,
    prefill: {
      email: user.email,
      contact: userProfile.waNumber,
      name: userProfile.name,
    },
    notes: [{uid: user.uid, campaignId: data.id}],
    theme: {color: '#EE9608'},
  };
  // console.log(options);
  // await sleep(3000);
  setLoading(true);
  RazorpayCheckout.open(options)
    .then(async (data1) => {
      // handle success
      //call function register to camp
      console.log({data: data1, order_id: order.data.id, options: options});
      await registerToCamp({
        data: data1,
        order_id: order.data.id,
        options: options,
      });
      // console.log('result', result);
      alert(`Success: ${data1.razorpay_order_id}`);
      await reload();
    })
    .catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
      setLoading(false);
    });
}
