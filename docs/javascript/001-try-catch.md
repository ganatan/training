# Exemple de code

  function getItems() {
    console.log('00000000001');
    try {
      console.log('00000000002');
      let x = 0;
      let y = 100 / x;
      undefinedFunction()
      console.log('00000000003');
    } catch (error) {
      console.log('00000000004');
    } finally {
      console.log('00000000005');
    }
  }

  getItems();