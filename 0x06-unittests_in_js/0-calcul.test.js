const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test calcul Module',function (){
    it('test calculateNumber returns correct integars', function(){
        assert.equal(calculateNumber(1, 2), 3);
    });
});
