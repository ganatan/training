# Exemple Promise avec then

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



# exemple Promise avec await async

  async function geItems(): Promise<string[]> {
    console.log('00000000001:geItems')
    console.log('00000000003:geItems')
    console.log('00000000004:geItems')
    const items = await new Promise<string[]>(resolve => {
      setTimeout(() => {
        const data: string[] = ['Aliens', 'Exodus']
        console.log('00000000002:geItems')
        resolve(data)
      }, 3000)
    })
    return items
  }

  async getItems() {
    try {
      const value = await geItems()
      console.log(JSON.stringify(value))
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

  getItems();