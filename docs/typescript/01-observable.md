
# Concept
  Un Observable est un objet qui représente un flux de données dans le temps.

# Exemple Typescript

  import { Observable } from 'rxjs';

  const source$ = new Observable(subscriber => {
    subscriber.next('A');   
    subscriber.next('B');   
    subscriber.complete();  
  });

  source$.subscribe({
    next: value => console.log('reçu:', value),
    complete: () => console.log('fini')
  });

# Exemple avec annulation

  import { Observable } from 'rxjs';

  const source$ = new Observable<string>(subscriber => {
    let i = 0;
    const id = setInterval(() => {
      subscriber.next(String.fromCharCode(65 + (i % 26)));
      i++;
    }, 500);
    return () => clearInterval(id);
  });

  const sub = source$.subscribe({
    next: v => console.log('reçu:', v),
    complete: () => console.log('fini')
  });

  setTimeout(() => {
    sub.unsubscribe();
    console.log('annulé');
  }, 2500);

# Exemple avec setTimeout

  import { Observable } from 'rxjs';

  const source$ = new Observable<boolean>(subscriber => {
    let i = 0;
    setTimeout(() => {
      subscriber.next(true)
      setTimeout(() => {
        subscriber.next(false)
        setTimeout(() => {
          subscriber.error(false)
          setTimeout(() => {
            subscriber.complete()
          }, 2000)
        }, 2000)
      }, 2000)
    }, 2000)
  });

  function getItems() {
    source$.subscribe({
      next: v => console.log('next:', v),
      error: e => console.log('error:', e),
      complete: () => console.log('complete')
    });

  }

  getItems();

