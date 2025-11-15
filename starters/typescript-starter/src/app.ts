let items = [
  { "type": "movie", "id": "01", "title": "Jaws", "year": 1975, "duration": 124 }
]

let items2 = // 00000000001:{"type":"series","id":"02","title":"Breaking Bad","seasons":5,"episodes":62}


//   { title: 'aliens' },
//   { title: 'Legend' },
// :
// 00000000001:{"type":"series","id":"02","title":"Breaking Bad","seasons":5,"episodes":62}

let results = items.map((value) => {
  console.log('00000000001:' + JSON.stringify(value))
  return value.title;
})

console.log('00000000001:' + JSON.stringify(results));
console.log('00000000001:' + JSON.stringify(items));


// interface Movie {
//   type: 'movie',
//   id: string,
//   title: string,
//   year: number,
//   duration: number,
// }

// interface Series {
//   type: 'series',
//   id: string,
//   title: string,
//   seasons: number,
//   episodes: number,
// }

// const m1: Movie = {
//   type: 'movie',
//   id: '01',
//   title: 'Jaws',
//   year: 1975,
//   duration: 124,
// }
// const m2: Series = {
//   type: 'series',
//   id: '02',
//   title: 'Breaking Bad',
//   seasons: 5,
//   episodes: 62,
// }


// function extractTitles<T extends { title: string }>(list: T[]): string[] {
//   // let results = ["Jaws", "Breaking Bad"]
//   let results = list.map((value) => {
//     console.log('00000000001:' + JSON.stringify(value));
//     return value.title;
//   })
//   return results;
// }

// let items = [m1, m2];
// console.log('00000000001:' + extractTitles(items));


