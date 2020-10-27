export const sortColumn = (evt, params) => {
  const { asc, rows, sorting } = params;
  const id = evt.currentTarget.id;
  const sortingColumns = { ...sorting };

  Object.keys(sortingColumns).forEach((key) => (sortingColumns[key] = false));
  sortingColumns[id] = true;

  const comparator = (key: string, ascParam: boolean) => (a: any, b: any) => {
    const value1 = a[key].value;
    const value2 = b[key].value;

    if (ascParam) {
      return value1 < value2 ? -1 : 1;
    } else {
      return value1 < value2 ? 1 : -1;
    }
  };

  return {
    sortedRows: rows.sort(comparator(id, asc)),
    sortingColumns,
  };
};
