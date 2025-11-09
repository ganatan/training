function hello() {
  console.log('00000000001:hello')
}

function getCallbacks(callback1: () => void,callback2: () => void) {
  console.log('00000000001:getCallbacks')
  callback1();
  callback2();
}

getCallbacks(hello,hello);


// function getItems() {
//   console.log('00000000001')
//   let result = new Promise((resolve,reject) => {
//     console.log('00000000002')
//     resolve(true);
//     // reject(true);
//   })
//   return result;
// }

// getItems()
//   .then(()=>{console.log('1')})
//   .catch(()=>{console.log('2')})
//   .finally(()=>{console.log('3')});

