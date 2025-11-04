# Exemple

  const operation = new Promise((resolve, reject) => {
    const success = true
    if (success) {
      resolve('OK')
    } else {
      reject('ERROR')
    }
  })
