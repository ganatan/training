
# Concept

# Exemple
  interface HasId {
    id: number;
  }

  function wrapWithMeta<T extends HasId>(value: T) {
    let result =
    {
      meta: 'ok',
      payload: value
    }
    return result;
  }

  const result = wrapWithMeta({ id: 42, name: 'Matrix' })
  console.log(result)
