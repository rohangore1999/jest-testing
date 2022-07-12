// importing sum which we have exported
const sum = require('./sum')

// while test('', ()=> {expect().toBe()} )
// test function will take 1st arg as string and 2nd arg as a callback[expect() >>> means what you are expecting; toBe() >>> means what result it should be]

test('expecting correct sums', () => { expect(sum(1,2)).toBe(3) })