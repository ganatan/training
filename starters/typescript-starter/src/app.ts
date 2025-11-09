
function geItems(): Promise<any[]> {
  const result = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log('00000000002:geItems');
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.json() as Promise<any[]>;
    })
    .then(items => {
      const ids = items.map(({ id }) => id);
      console.log(ids);
      return ids;
    });

  console.log('00000000004:geItems')
  return result
}

geItems()
  .then((value) => {
    console.log(JSON.stringify(value))
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => { })
