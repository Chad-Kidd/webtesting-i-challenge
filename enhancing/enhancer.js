module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// function succeed(item) {
// //if item does not equal 20 increase by 1 
//   if(item !== 20)
//   item = {
//     ...item,
//     enhancement: +1
//   }
//   return { ...item };
// }

function succeed(item) {
  //if item does not equal 20 increase by 1 
  if (item !== 20){
  item = {
    // ...item,
    enhancement: item + 1,
  }
  return { ...item };
 } 
  else { 
  //do not increase by 1 just return item as is
    item = {
      // ...item,
      enhancement: item,
  }
  return {...item}
}}

function repair(item) {
  item = {
    ...item,
    durability: 100
  }
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
