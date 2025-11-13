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

