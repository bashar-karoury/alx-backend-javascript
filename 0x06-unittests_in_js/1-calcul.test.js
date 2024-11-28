const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test Enhanced calcul Module',function (){

    describe('Test SUM type', function(){

        it('test calculateNumber returns correct with integars', function(){
            assert.equal(calculateNumber('SUM', 1, 2), 3);
        });
        
        it('test calculateNumber returns correct with fractions trunc', function(){
            assert.equal(calculateNumber('SUM', 1.4, 2.2), 3);
        });
        
        it('test calculateNumber returns correct with fractions ciel', function(){
            assert.equal(calculateNumber('SUM', 1.9, 2.6), 5);
        });
        
        it('test calculateNumber returns correct with negative', function(){
            assert.equal(calculateNumber('SUM', 1.5,  -1), 1);
        });
    });


    describe('Test SUBTRACT type', function(){

        it('test calculateNumber returns correct with integars', function(){
            assert.equal(calculateNumber('SUBTRACT', 5, 2), 3);
        });
        
        it('test calculateNumber returns correct with fractions trunc', function(){
            assert.equal(calculateNumber('SUBTRACT', 5.4, 2.2), 3);
        });
        
        it('test calculateNumber returns correct with fractions ciel', function(){
            assert.equal(calculateNumber('SUBTRACT', 4.9, -0.5), 5);
        });
        
        it('test calculateNumber returns correct with negative', function(){
            assert.equal(calculateNumber('SUBTRACT', -1.5,  -1), 0);
        });
    });


    describe('Test DIVIDE type', function(){

        it('test calculateNumber returns correct with integars', function(){
            assert.equal(calculateNumber('DIVIDE', 6, 2), 3);
        });
        
        it('test calculateNumber returns correct with fractions trunc', function(){
            assert.equal(calculateNumber('DIVIDE', 5.5, 2.2), 3);
        });
        
        it('test calculateNumber returns correct with fractions ciel', function(){
            assert.equal(calculateNumber('DIVIDE', 4.9, -1.5), -5);
        });
        
        it('test calculateNumber returns correct with negative', function(){
            assert.equal(calculateNumber('DIVIDE', -1.5,  -1), 1);
        });

        it('test calculateNumber returns correct with rounded zero Divisor', function(){
            assert.equal(calculateNumber('DIVIDE', -1.5,  0.2), 'Error');
        });

        it('test calculateNumber returns correct with zero Divisor', function(){
            assert.equal(calculateNumber('DIVIDE', -1.5,  0), 'Error');
        });

        it('test calculateNumber returns correct with zero for both operands', function(){
            assert.equal(calculateNumber('DIVIDE', 0,  0), 'Error');
        });

        it('test calculateNumber returns correct with zero in dividend', function(){
            assert.equal(calculateNumber('DIVIDE', 0,  1), 0);
        });
    });

    describe('Test Wrong type', function(){

        it('test calculateNumber returns correct with wrong type', function(){
            assert.equal(calculateNumber('MULT', 5, 2), 'Error');
        });
    });
});
