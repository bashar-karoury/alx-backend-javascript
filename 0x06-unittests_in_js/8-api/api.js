const express = require('express');

const app = express();
const PORT = 7865;
app.get('/', function(req, res){
    res.status(200).end('Welcome to the payment system');
});

app.listen(PORT, () => {

    console.log(`API available on localhost port ${PORT}`);
});