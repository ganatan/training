# Concepts
  function getItems() {
    try {
    } catch (error) {
    } finally {
    }
  }

# Gestion des erreurs avec try catch
 - ce code genere une erreur
 JSON.parse('xxx')

# Utilmisation de try catch

  function showItems() {
    try {
      console.log('00000000001:showItems');
      JSON.parse('xxx')
    }
    catch { }
    finally { }
  }
  console.log('00000000001:');


  showItems();