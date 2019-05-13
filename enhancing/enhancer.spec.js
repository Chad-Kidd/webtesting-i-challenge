const enhancer = require('./enhancer.js');
//export enhance.js or file with code to be tested

// test away!
describe('enhancer.js', () => {
    describe('repair() method', () => {
  it('should return a new item with the durability restored to 100', () =>  { 
      
    expect(enhancer.repair(20).durability).toBe(100);
   
    })      
 })
})
