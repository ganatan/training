class Media {
  public name: string;
  constructor(name?: string) {
    // this.name = 'Exodus';
  }
}
let media: Media = new Media();
// media.name = 'Alien';
console.log('00000000001:');
console.log('00000000001:' + media.name);
console.log('00000000001:' + JSON.stringify(media));
