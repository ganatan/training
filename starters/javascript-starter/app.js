function getValue(ok) {
  return new Promise((resolve, reject) => {
    if (ok) resolve('OK')
    else reject('ERROR')
  })
}

getValue(false)
  .then(value => console.log(value))
  .catch(err => console.log(err))