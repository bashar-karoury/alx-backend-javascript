// By using sinon.spy, make sure the math used for sendPaymentRequestToApi(100, 20) is the same as

const { expect } = require("chai");
const Utils = require('./utils');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('Test sendPaymentRequestToApi', function(){

    let calculateNumberSpy;
    let logSpy;

    beforeEach(function () {
        calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        logSpy = sinon.spy(console,'log');
        
      });
      
    afterEach(function () {
        calculateNumberSpy.restore();
        logSpy.restore();
      });

    it('test sendPaymentRequestToApi call Utils.calculateNumber correctly with 100, 20', function(){
        // create a stub on Utils.calculateNumber

        sendPaymentRequestToApi(100,20);

        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
        expect(logSpy.calledOnce).to.be.true;
        expect(logSpy.calledWith('The total is: 120')).to.be.true;
    });

    it('test sendPaymentRequestToApi call Utils.calculateNumber correctly with 100, 20', function(){

        sendPaymentRequestToApi(10,10);

        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWith('SUM', 10, 10)).to.be.true;
        expect(logSpy.calledOnce).to.be.true;
        expect(logSpy.calledWith('The total is: 20')).to.be.true;
    });
});