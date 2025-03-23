function validateItem(item) {
  if (!item || typeof item !== 'object') {
    throw new Error('Missing person data');
  }

  const { name, city } = item;

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    throw new Error('Name must be a string of at least 2 characters');
  }

  if (!city || typeof city !== 'string' || city.trim().length < 2) {
    throw new Error('City must be a string of at least 2 characters');
  }
}

export { validateItem };
