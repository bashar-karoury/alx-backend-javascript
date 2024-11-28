// simple code under test function with sum, mult, sub, div
module.exports =  function calculateNumber(type, a, b){
    const r_a = Math.round(a);
    const r_b = Math.round(b);
    let result;
    switch(type){
        case 'SUM':
            result = r_a + r_b;
            break;
        case 'SUBTRACT':
            result =  r_a - r_b;
            break;
        case 'DIVIDE':
            if (r_b == 0){
                result = 'Error';
            }
            else{
                result = r_a / r_b;
            }
            break;
        default:
            result = 'Error';
    }
    return result;
}
