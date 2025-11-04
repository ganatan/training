function aappelerFunction() {
  console.log('00000000001:aappelerFunction');
}

// aappelerFunction();


function quiappelFunction(toto) {
  console.log('00000000001:quiappelFunction');
  toto();
  console.log('00000000002:quiappelFunction');
}

quiappelFunction(aappelerFunction);

// const operation = new Promise((resolve, reject) => {
//   const success = true
//   if (success) {
//     resolve('OK')
//   } else {
//     reject('ERROR')
//   }
// })

// function server() {
//   console.log('00000000001');
//   operation
//     .then((value) => {
//       console.log("00000000002" + value)
//     })
//     .catch((error) => {
//       console.log("00000000003" + error)
//     })
//     .finally(() => {
//       console.log('Terminé')
//     });
//   console.log('00000000004');
// }
// server();