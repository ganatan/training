# Concepts
  setTimeout(() => {
    console.log('timeout')
  }, 1000)

  setInterval(() => {
    console.log('Interval')
  }, 1000)


# Exemple

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  delay(2000).then(() => {
    console.log('Terminé')
  })