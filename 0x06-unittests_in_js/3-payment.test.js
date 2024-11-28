// By using sinon.spy, make sure the math used for sendPaymentRequestToApi(100, 20) is the same as

const { expect } = require("chai");
const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');

describe('Test sendPaymentRequestToApi Functionality', function(){

    it('test sendPaymentRequestToApi call Utils.calculateNumber correctly', function(){
        // create a spy on Utils.calculateNumber
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100,20);
        // console.log(calculateNumberSpy.called);
        // console.log(calculateNumberSpy.calledOnce);
        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    });
});