
setInterval(() => {
  console.log('00000000001')
},1000)


// import { Observable } from 'rxjs';

// const source$ = new Observable<string>(subscriber => {
//   let i = 0;
//   const id = setInterval(() => {
//     subscriber.next(String.fromCharCode(65 + (i % 26)));
//     i++;
//   }, 500);
//   return () => {
//     console.log('00000000001');
//     clearInterval(id)
//   };
// });

// const sub = source$.subscribe({
//   next: v => console.log('reçu:', v),
//   complete: () => console.log('fini')
// });

// setTimeout(() => {
//   sub.unsubscribe();
//   console.log('annulé');
// }, 2500);

// import { Observable } from 'rxjs';

// const source$ = new Observable(subscriber => {
//   subscriber.next('A');   
//   subscriber.next('B');   
//   subscriber.complete();  
// });

// source$.subscribe({
//   next: value => console.log('reçu:', value),
//   complete: () => console.log('fini')
// });

// import { Observable } from 'rxjs';

// function getItems$(): Observable<string> {
//   return new Observable(subscriber => {
//     const id = setTimeout(() => {
//       subscriber.next('valeur après 2s');
//     }, 2000);
//     setTimeout(() => {
//       subscriber.next('valeur après 4s');
//       subscriber.complete();
//     }, 4000);
//     return () => clearTimeout(id);
//   });
// }

// getItems$().subscribe({
//   next: v => console.log('next:', v),
//   error: e => console.log('error:', e),
//   complete: () => console.log('complete')
// });



// function planifier() {
//   console.log('A: planifier:entrée');
//   setTimeout(() => {
//     console.log('C: planifier:retard:4s');
//   }, 4000);
//   console.log('B: planifier:sortie');
// }

// console.log('0: main:avant');
// planifier();
// console.log('1: main:après');