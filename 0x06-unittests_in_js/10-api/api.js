const express = require('express');

const app = express();
const PORT = 7865;
app.use(express.json());
app.get('/', function(req, res){
    res.status(200).end('Welcome to the payment system');
});
app.get('/cart/:id(\\d+)', function(req, res){
    const id = req.params.id;
    // try to cast to Number
    const number_id = Number(id);
    if (number_id){
        console.log(number_id);
        res.status(200).end(`Payment methods for cart ${number_id}`);
    }
    else{
        console.error('Fail Cast to number')
        res.status(404).end();
    }
});

app.get('/available_payments', function(req, res){
    return_obj = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      };
    res.status(200).json(return_obj);
});

app.post('/login', function(req, res){
    const username = req.body.userName;
    console.log(req.body);
    res.status(200).end(`Welcome ${username}`);
});

app.listen(PORT, () => {

    console.log(`API available on localhost port ${PORT}`);
});