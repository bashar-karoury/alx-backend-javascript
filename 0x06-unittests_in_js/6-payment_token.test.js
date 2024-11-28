
const { expect } = require("chai");
const Utils = require('./utils');
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('Test getPaymentTokenFromAPI', function(){

    it('test getPaymentTokenFromAPI return a resolving promise', function(done){
        getPaymentTokenFromAPI(true).then((data)=>{
            expect(data.data).to.equals('Successful response from the API');
            done();
        }).catch(done);;

    });
});