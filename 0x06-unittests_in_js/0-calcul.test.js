const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test calcul Module',function (){
    it('test calculateNumber returns correct with integars', function(){
        assert.equal(calculateNumber(1, 2), 3);
    });

    it('test calculateNumber returns correct with fractions trunc', function(){
        assert.equal(calculateNumber(1.4, 2.2), 3);
    });

    it('test calculateNumber returns correct with fractions ciel', function(){
        assert.equal(calculateNumber(1.9, 2.6), 5);
    });

    it('test calculateNumber returns correct with negative', function(){
        assert.equal(calculateNumber(1.5,  -1), 1);
    });
});
