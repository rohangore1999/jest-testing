//importing cloneArray
const cloneArray = require('./cloneArray')

test('expected to clone', () => {
    let arr = [1,2,3]
    expect(cloneArray(arr)).toEqual(arr) 
    //as cloneArray create new array and put same number, it means it is pointing two different memories
    // so for that we have use toEqual(check for same structure) instead of toBe()
    // toBe uses Object.is to test exact equality. If you want to check the value of an object, use toEqual 
    
    // eg >>> using not.toBe()
    expect(cloneArray(arr)).not.toBe(arr)
})
