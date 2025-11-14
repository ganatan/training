
// function getItemsPromise(hasError: boolean) {
//   let result = new Promise((resolve, reject) => {
//     if (hasError) {
//       console.log('00000000001:getItemsPromise')
//       setTimeout(() => {
//         reject(false);
//       }, 2000)
//     } else {
//       console.log('00000000002:getItemsPromise')
//       setTimeout(() => {
//         resolve(true);
//       }, 4000)
//     }
//   })
//   return result;
// }

// async function run() {
//   console.log('00000000001:run')
//   let result = await getItemsPromise(false);
//   console.log('00000000002:run')
// }

// run();


// function run() {
//   getItemsPromise(false)
//     .then((value) => {
//       console.log('then:' + value)
//     }
//     )
//     .catch((error) => {
//       console.log('catch:' + error)
//     }
//     );

// }




// import { Observable } from "rxjs";


// async function getItemsPromise(hasError: boolean) {
//   let result = new Promise((resolve, reject) => {
//     if (hasError) {
//       setTimeout(() => {
//         reject(false);
//       }, 2000)
//     } else {
//       setTimeout(() => {
//         resolve(true);
//       }, 4000)
//     }
//   })
//   return result;
// }

// async function getItemsWithoutAsync() {
//   getItemsPromise(false)
//     .then((value) => { console.log('getItemsWithoutAsync:4 secondes' + value) });

//   getItemsPromise(true)
//     .catch((error) => { console.log('getItemsWithoutAsync:2 secondes:' + error) })
// }


// async function getItemsWithoutAsyncImbrique() {
//   getItemsPromise(false)
//     .then((value) => {
//       console.log('getItemsWithoutAsyncImbrique:4 secondes' + value)
//       getItemsPromise(true)
//         .catch((error) => { console.log('getItemsWithoutAsyncImbrique:2 secondes:' + error) })
//     });
// }


// async function getItemsWithAsync() {
//   try {
//     let result = await getItemsPromise(false);
//     console.log('getItemsWithAsync:4 secondes' + result)
//     result = await getItemsPromise(true);
//     console.log('getItemsWithAsync:2 secondes' + result)
//   }
//   catch (error) {
//     console.log('00000000001:' + error)

//   }
//   finally {
//     console.log('00000000001:finally')
//   }
// }


// // getItemsWithoutAsync();
// // getItemsWithoutAsyncImbrique();

// getItemsWithAsync();