const express = require('express');

const app = express();
const PORT = 7865;
app.get('/', function(req, res){
    res.status(200).end('Welcome to the payment system');
});
app.get('/cart/:id', function(req, res){
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

app.listen(PORT, () => {

    console.log(`API available on localhost port ${PORT}`);
});