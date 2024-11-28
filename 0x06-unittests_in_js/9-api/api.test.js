
const { expect } = require("chai");
const request = require('request');

describe('Test index page / ', function(){
    it('test server returns correct status code for get on /', function(done){
        request.get('http://localhost:7865', (error, response, body) => {
            expect(response.statusCode).to.equals(200);
            done();
        });
    });

    it('test server returns correct result', function(done){
        request.get('http://localhost:7865', (error, response, body) => {
            expect(response.body).to.equals('Welcome to the payment system');
            done();
        });

    });

    it('test server returns not 200 on put /', function(done){
        request.post('http://localhost:7865', (error, response, body) => {
            expect(response.body).to.not.equal(200);
            done();
        });
    });

    it('Correct status code when :id is a number?', function(done){
        request.get('http://localhost:7865/cart/12', (error, response, body) => {
            expect(response.statusCode).to.equals(200);
            expect(response.body).to.equals('Payment methods for cart 12');
            done();
        });
    });

    it('Correct status code when :id is NOT a number (=> 404)?', function(done){
        request.get('http://localhost:7865/cart/ab', (error, response, body) => {
            expect(response.statusCode).to.equals(404);
            done();
        });


    });
});