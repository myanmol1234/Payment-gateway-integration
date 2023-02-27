// Inside app.js
const express = require('express');
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const app = express();

// Parse application/json
app.use(bodyParser.json());

// Handle payment route



// This razorpayInstance will be used to
// access any resource from razorpay
const razorpayInstance = new Razorpay({

	// Replace with your key_id
	key_id:'rzp_test_2NxCQ7ni3c3Kx9',

	// Replace with your key_secret
	key_secret:'LH64IVgD03EMhJO6KDzsU1Cv',
});


const PORT = process.env.PORT || '3500';

// Here we will create two routes one
// /createOrder and other /verifyOrder
// Replace these comments with the code
// provided later in step 2 & 8 for routes

app.post('/pay', (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: amount * 100,
    currency: 'INR',
    receipt: 'receipt_order_123',
    payment_capture: 1,
  };
  razorpayInstance.orders.create(options, (err, order) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(order);
    }
  });
});


app.listen(PORT, ()=>{
	console.log("Server is Listening on Port ", PORT);
});

