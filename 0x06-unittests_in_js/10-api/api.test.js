
const { expect } = require("chai");
const request = require('request');
describe('Testing express back end', function(){

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

    describe('Test page /login ', function(){
        it('test server returns correct response for /login', function(done){
            request.post(
                {
                  url: 'http://localhost:7865/login', // Change to your URL
                  json: { "userName": "Betty" } // Automatically sets Content-Type to application/json
                },
                (error, response, body) => {
                  if (error) {
                    console.error('Error:', error);
                  } else {
                    expect(response.statusCode).to.equals(200);
                    expect(response.body).to.equals('Welcome Betty');
                    done();
                  }
                }
            );
        });


        it('test server returns correct response for /available_payments', function(done){
            const returned_obj = {
                payment_methods: {
                  credit_cards: true,
                  paypal: false
                }
              };
            request.get('http://localhost:7865/available_payments',
                (error, response, body) => {
                  if (error) {
                    console.error('Error:', error);
                  } else {
                    const jsonObject = JSON.parse(body);
                    expect(response.statusCode).to.equals(200);
                    expect(jsonObject).to.deep.equals(returned_obj);
                    done();
                  }
                }
            );
        });
    });
    
});
