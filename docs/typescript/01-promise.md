# Concept
  Une Promise = 2 chemins possibles

  Une Promise ne fait qu’une seule chose :
    resolve(value) → succès
    reject(error) → échec
    C’est tout.

    new Promise((resolve, reject) => {
      resolve(true);     // succès
      reject(new Error); // échec
    });

  Une Promise ne peut être résolue ou rejetée qu’une seule fois.

  Resolve → valeur typée
    Si tu écris :
    new Promise<boolean>((resolve) => resolve(true));

    Alors le resolve doit envoyer un boolean.

  Reject → n’importe quelle erreur
    Le reject n’a pas besoin d’envoyer un boolean.
    Il envoie toujours :
      une erreur, pas un type logique.
      reject(new Error('Oups'));
    Le type du rejet est automatiquement unknown.


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

