# Concepts
  setTimeout(() => {
    console.log('timeout')
  }, 1000)

  setInterval(() => {
    console.log('Interval')
  }, 1000)

# Exemples complets

  setTimeout(() => {
    console.log('timeout')
  }, 1000)

  const intervalId = setInterval(() => {
    console.log('interval')
  }, 1000)

  clearInterval(intervalId)

  const timeoutId = setTimeout(() => {
    console.log('never displayed')
  }, 2000)

  clearTimeout(timeoutId)

  function loop() {
    console.log('frame')
    requestAnimationFrame(loop)
  }
  requestAnimationFrame(loop)

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  async function run() {
    await sleep(1500)
    console.log('sleep done')
  }
  run()
