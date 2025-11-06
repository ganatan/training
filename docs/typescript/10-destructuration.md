
# Exemple de code
  const media = {
  originalName: 'Alien',
  budget: 12345,
  show() {
      console.log('00000000001:show');
  }
  }

  const { originalName, budget } = media

# Exemple
  const media = { name: 'Alien', budget: 1234 }
  const movie = { media, franchise: true }
  const movieSpread = { ...media, franchise: true }

  console.log('00000000002:' + JSON.stringify(movie));
  console.log('00000000002:' + JSON.stringify(movieSpread));  