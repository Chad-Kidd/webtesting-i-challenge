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

describe('enhancer.js', () => {
    describe('succeed() method', () => {
  it('if not 20 return ehancement increased by 1', () =>  { 
      
    expect(enhancer.succeed(6).enhancement).toBe(7);
    //if at 20 do not increae by 1
    expect(enhancer.succeed(20).enhancement).toBe(20);
   
    })      
 })
})


