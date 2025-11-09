
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

# Destructuration Tableau Simple
  const items = 
  [
    {
      userId: 1,
      id: 1,
    },
    {
      userId: 2,
      id: 3,
    }
    ]
  ;


  const ids = items.map(({ id }) => id);
  console.log(ids);  