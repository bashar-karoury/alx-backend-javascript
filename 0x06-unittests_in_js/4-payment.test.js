// By using sinon.spy, make sure the math used for sendPaymentRequestToApi(100, 20) is the same as

const { expect } = require("chai");
const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');

describe('Test sendPaymentRequestToApi Functionality', function(){

    it('test sendPaymentRequestToApi call Utils.calculateNumber correctly', function(){
        // create a stub on Utils.calculateNumber
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
        calculateNumberStub.returns(10);
        const logSpy = sinon.spy(console,'log');
        sendPaymentRequestToApi(100,20);
        // console.log(calculateNumberSpy.called);
        // console.log(calculateNumberSpy.calledOnce);
        expect(calculateNumberStub.calledOnce).to.be.true;
        expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
        expect(logSpy.calledOnce).to.be.true;
        expect(logSpy.calledWith('The total is: 10')).to.be.true;
    });
});