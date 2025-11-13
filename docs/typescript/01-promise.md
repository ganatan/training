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

  # Exercice
  
  - Enonce
    🎯 Objectif
    Créer une fonction runPromise qui :
    reçoit un booléen en paramètre
    retourne une Promise<string>
    si le paramètre vaut true → resolve("OK") après 2s
    si le paramètre vaut false → reject("ERROR") après 2s
    l’appel doit gérer then ET catch

    ➤ Contraintes
    pas d’async/await
    pas de commentaires
    délai : 2 secondes

    deux appels de test :
    un qui réussit
    un qui échoue

  function runPromise(param: boolean) {
    let result = new Promise<string>((resolve, reject) => {
      if (param === true) {
        setTimeout(() => {
          resolve('OK')
        }, 2000);
      } else {
        setTimeout(() => {
          reject('ERROR')
        }, 2000);
      }

    })
    return result;
  }

  runPromise(true)
    .then(value => console.log(value))
    .catch(err => console.log(err));

  runPromise(false)
    .then(value => console.log(value))
    .catch(err => console.log(err));

