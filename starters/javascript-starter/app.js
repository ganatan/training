class Movies {
  constructor() {
    console.log('00000000001:Movies');
    this.name = 'default name';
  }
}

let movies = new Movies();

console.log('00000000001');
console.log('00000000001:' + JSON.stringify(movies));
