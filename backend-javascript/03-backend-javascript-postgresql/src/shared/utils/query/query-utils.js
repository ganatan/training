export function addFilterCondition(condition, params, column, value) {
  const decodedValue = value ? decodeURIComponent(value) : value;
  if (decodedValue) {
    const formattedValue = `%${decodedValue}%`;
    params.push(formattedValue);

    return `${condition} AND LOWER(${column}) LIKE LOWER($${params.length})`;
  }

  return condition;
}

export function adaptSortField(sort, sortMapping) {
  const isDescending = sort.startsWith('-');
  const sortKey = isDescending ? sort.substring(1) : sort;
  const adaptedSortKey = sortMapping[sortKey] || sortKey;

  return isDescending ? `-${adaptedSortKey}` : adaptedSortKey;
}
