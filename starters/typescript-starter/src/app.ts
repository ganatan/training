type Media = {
  name: string,
  budget: number
}


let media: Media = {
  name: '0001',
  budget: 10
};
 media.name = '00001';
// media.budget = 10;


console.log('00000000001:');
console.log('00000000001:' + JSON.stringify(media));

