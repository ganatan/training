# Fonction native Fetch
  function fetch(
    input: string | URL | Request,
    init?: RequestInit,
  ): Promise<Response>;

# Exemple Promise
  function geItems(): Promise<string[]> {
    console.log('00000000001:geItems')
    let result = new Promise<string[]>(resolve => {
      setTimeout(() => {
        let items: string[] = [
          'Aliens', 'Exodus'
        ]
        console.log('00000000002:geItems')
        resolve(items);
      }, 3000)
      console.log('00000000003:geItems')
    })
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


# Exemple avec Fetch
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
