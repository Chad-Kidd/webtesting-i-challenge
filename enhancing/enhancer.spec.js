const enhancer = require('./enhancer.js');
//export enhance.js or file with code to be tested

// test away!

//REPAIR TEST
describe('enhancer.js', () => {
    describe('repair() method', () => {
  it('should return a new item with the durability restored to 100', () =>  { 
      
    expect(enhancer.repair(20).durability).toBe(100);
   
    })      
 })
})

//SUCCEED TEST
describe('enhancer.js', () => {
    describe('succeed() method', () => {
  it('if not 20 return ehancement increased by 1', () =>  { 
      
    expect(enhancer.succeed(6).enhancement).toBe(7);
    //if at 20 do not increae by 1
    expect(enhancer.succeed(20).enhancement).toBe(20);
   
    })      
 })
})

//FAIL TEST
it('Adheres to MVP test conditions of Failure', () =>{
    //If enhancement if less than 15 return durability - 5 
    expect(enhancer.fail(10).enhancement).toBe(10) && fail(14).durability.toBe(5);
    
    //If enhancement if more than 15 return durability - 10
    expect(enhancer.fail(10).enhancement).toBe(10) && fail(14).durability.toBe(1);

    //If the item's enhancement level is greater than 16, the enhancement 
    //level decreases by 1 (17 goes down to 16, 18 goes down to 17).
    expect(enhancer.fail(14).enhancement).toBe(14) && fail(14).durability.toBe(13)
})



