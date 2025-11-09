# Concepts

  function getItems() {
    let items: string[] = [
      'Aliens',
      'Gladiator',
      'Exodus',
      'Avatar'
    ]
    items.forEach((value,index) => { 
      console.log('00000000001:' + value)
      console.log('00000000001:' + index)
    });

    console.log('00000000001:' + JSON.stringify(items))
  }

  getItems();