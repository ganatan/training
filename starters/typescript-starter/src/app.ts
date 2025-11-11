// let movies: string[] = ['Aliens', 'Exodus'];

const movies = ['Aliens', 'Exodus', 'Legend', 'Dune'];

let total = 0;
let itemsForEach = movies.forEach((toto1, toto2, toto3) => {
  let value: string = toto1.toUpperCase();
  if (value.includes('O')) {
    total = total + 1;
  }
})
console.log('00000000001:' + total);

// let itemsMap = movies.map((toto1, toto2, toto3) => {
//   return toto1;
// })


// console.log('00000000001:' + JSON.stringify(movies));
// console.log('00000000002:' + JSON.stringify(itemsForEach));
// console.log('00000000003:' + JSON.stringify(itemsMap));
