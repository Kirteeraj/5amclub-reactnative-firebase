import {razorpaykeyId} from '../config';
import RazorpayCheckout from 'react-native-razorpay';
import React from 'react';
import {Button} from 'react-native';

export function RazorpayUI() {
  return (
    <Button
      title={'pay'}
      onPress={() => {
        var options = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: razorpaykeyId, // Your api key
          amount: '1100',
          name: 'foo',
          prefill: {
            email: 'void@razorpay.com',
            contact: '9191919191',
            name: 'Razorpay Software',
          },
          notes: ['<userId>', '<CampId>'],
          theme: {color: '#F37254'},
        };
        RazorpayCheckout.open(options)
          .then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
          })
          .catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
          });
      }}
    />
  );
}
