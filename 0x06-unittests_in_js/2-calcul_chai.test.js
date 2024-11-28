const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('Test Enhanced calcul Module Using Chai Assertions',function (){

    describe('Test SUM type', function(){

        it('test calculateNumber returns correct with integars', function(){
            expect(calculateNumber('SUM', 1, 2)).to.equals(3);
        });
        
        it('test calculateNumber returns correct with fractions trunc', function(){
            expect(calculateNumber('SUM', 1.4, 2.2)).to.equals(3);
        });
        
        it('test calculateNumber returns correct with fractions ciel', function(){
            expect(calculateNumber('SUM', 1.9, 2.6)).to.equals(5);
        });
        
        it('test calculateNumber returns correct with negative', function(){
            expect(calculateNumber('SUM', 1.5,  -1)).to.equals(1);
        });
    });


    describe('Test SUBTRACT type', function(){

        it('test calculateNumber returns correct with integars', function(){
            expect(calculateNumber('SUBTRACT', 5, 2)).to.equals(3);
        });
        
        it('test calculateNumber returns correct with fractions trunc', function(){
            expect(calculateNumber('SUBTRACT', 5.4, 2.2)).to.equals(3);
        });
        
        it('test calculateNumber returns correct with fractions ciel', function(){
            expect(calculateNumber('SUBTRACT', 4.9, -0.5)).to.equals(5);
        });
        
        it('test calculateNumber returns correct with negative', function(){
            expect(calculateNumber('SUBTRACT', -1.5,  -1)).to.equals(0);
        });
    });


    describe('Test DIVIDE type', function(){

        it('test calculateNumber returns correct with integars', function(){
            expect(calculateNumber('DIVIDE', 6, 2)).to.equals(3);
        });
        
        it('test calculateNumber returns correct with fractions trunc', function(){
            expect(calculateNumber('DIVIDE', 5.5, 2.2)).to.equals(3);
        });
        
        it('test calculateNumber returns correct with fractions ciel', function(){
            expect(calculateNumber('DIVIDE', 4.9, -1.5)).to.equals(-5);
        });
        
        it('test calculateNumber returns correct with negative', function(){
            expect(calculateNumber('DIVIDE', -1.5,  -1)).to.equals(1);
        });

        it('test calculateNumber returns correct with rounded zero Divisor', function(){
            expect(calculateNumber('DIVIDE', -1.5,  0.2)).to.equals('Error');
        });

        it('test calculateNumber returns correct with zero Divisor', function(){
            expect(calculateNumber('DIVIDE', -1.5,  0)).to.equals('Error');
        });

        it('test calculateNumber returns correct with zero for both operands', function(){
            expect(calculateNumber('DIVIDE', 0,  0)).to.equals('Error');
        });

        it('test calculateNumber returns correct with zero in dividend', function(){
            expect(calculateNumber('DIVIDE', 0,  1)).to.equals(0);
        });
    });

    describe('Test Wrong type', function(){

        it('test calculateNumber returns correct with wrong type', function(){
            expect(calculateNumber('MULT', 5, 2)).to.equals('Error');
        });
    });
});
