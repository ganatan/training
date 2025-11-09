# Exemple
  function hello() {
    console.log('00000000001:hello')
  }

  function getCallbacks(callback: () => void) {
    console.log('00000000001:getCallbacks')
    callback();
  }

  getCallbacks(hello);