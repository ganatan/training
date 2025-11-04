let items: string[] = [
  'Alien',
  'Exodus'
]

function getItemsCallback() {
  console.log('00000000001:getItemsCallback');
}

// function getItems(items: string[]) {
function getItems(callback) {
  // items.forEach((value, index) => {
  //   console.log('00000000001:' + value);
  //   console.log('00000000002:' + index);
  // })
  callback();
  console.log('00000000003:getItems');
}

console.log('00000000004:');
// console.log('00000000005:' + JSON.stringify(items));

getItems(getItemsCallback);
// getItems(items);