const { add } = require('./'); 

describe('positive numbers', () => {
    it('both', () => {
        expect(add(2, 3)).toEqual(5);
    })
}) 