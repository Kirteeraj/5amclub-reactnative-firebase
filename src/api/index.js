import {onGoogleButtonPress} from '../api/googleAuth';
import {setProfile} from './setProfile';
import {login, register, logout} from '../api/emailPasswordLogin';
import {getCampaings} from '../api/getCampaings';
import {razorpayPay} from '../api/razorpayPay';
import {getProfile} from '../api/getProfile';
import {createOrder} from '../api/createOrder';
import {registerToCamp} from '../api/registerToCamp';

export {onGoogleButtonPress, setProfile, login, register, logout, getCampaings};
export {razorpayPay, createOrder, registerToCamp, getProfile};
