function validateItem(item) {
  if (!item || typeof item !== 'object') {
    throw new Error('Missing city data');
  }

  const { name } = item;

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    throw new Error('Name must be a string of at least 2 characters');
  }

}

export { validateItem };
