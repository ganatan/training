import { Observable } from "rxjs";

function getItemsObservable(error: boolean): Observable<string> {
  setTimeout
  let result = new Observable<string>((subscriber) => {
    if (error) {
      console.log('00000000001:getItemsObservable:reject');
      subscriber.error(false);
    } else {
      console.log('00000000001:getItemsObservable:resolve');
      subscriber.next('1111');
      subscriber.complete();
      subscriber.next('2222');
    }
  })
  return result;
}


// getItemsPromise(true)
//   .then(() => { })
//   .catch(() => { })
//   .finally(() => { });

// getItemsPromise(false)
//   .then(() => { })
//   .catch(() => { })
//   .finally(() => { });


// getItemsObservable(true)
//   .subscribe((value) => {
//     console.log('00000000001:' + value);
//   })


getItemsObservable(false)
  .subscribe({
    next: v => console.log('next', v),
    error: e => console.log('error', e),
    complete: () => console.log('complete')
  });

getItemsObservable(false)
  .subscribe((value) => {

    console.log('00000000001:' + value);
  })




function getItemsPromise(error: boolean): Promise<boolean> {
  let result = new Promise<boolean>((resolve, reject) => {
    if (error) {
      console.log('00000000001:getItemsPromise:reject');
      reject(false)
    } else {
      console.log('00000000001:getItemsPromise:resolve');
      resolve(true)
    }

  })
  return result;
}

