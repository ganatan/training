
# RxPromise

  loadItemsPromise(type: boolean): Promise<boolean> {
    console.log('00000000001:RxPromise:loadItems');
    let result = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        console.log('00000000001:RxPromise:loadItems:resolve');
        if (type) {
          resolve(true);
        } else {
          reject(false);
        }
      }, 2000)
    })
    return result;
  }

# RxObservable

  loadItemsObservable$(): Observable<boolean> {
    console.log('00000000001:RxObservable:loadItems');
    return new Observable<boolean>((subscriber) => {
      setTimeout(() => {
        console.log('00000000001:RxObservable:loadItems:next:true');
        subscriber.next(true);
        setTimeout(() => {
          console.log('00000000002:RxObservable:loadItems:next:false');
          subscriber.next(false);
          setTimeout(() => {
            console.log('00000000003:RxObservable:loadItems:error');
            subscriber.error('error');
            console.log('00000000004:RxObservable:loadItems:complete');
            subscriber.complete();
            console.log('00000000005:RxObservable:loadItems:complete');
          }, 2000);
        }, 2000);
      }, 2000);
    });
  }
