import "jest";
import { sortColumn } from "./sortable";
import { getData } from "./__mocks__/table.js";

const getParams = () => ({
  asc: true,
  sorting: getData().rows.map(() => false),
  rows: getData().rows,
});

describe("Sortable Unit Test", () => {
  it.each([
    [
      "Value 1",
      "value1",
      [
        { value1: { value: 31 } },
        { value1: { value: 21 } },
        { value1: { value: 11 } },
      ],
    ],
    [
      "Value 2",
      "value2",
      [
        { value2: { value: 32 } },
        { value2: { value: 22 } },
        { value2: { value: 12 } },
      ],
    ],
    [
      "Value 3",
      "value3",
      [
        { value3: { value: 33 } },
        { value3: { value: 23 } },
        { value3: { value: 13 } },
      ],
    ],
  ])(
    "WHEN call sortColumn for %s column THEN should sort for this column",
    (column, key, values) => {
      const params = getParams();
      const evt = { currentTarget: { id: key } };
      let { sortedRows } = sortColumn(evt, params);

      expect(sortedRows[0][key].value).toBe(values[2][key].value);
      expect(sortedRows[1][key].value).toBe(values[1][key].value);
      expect(sortedRows[2][key].value).toBe(values[0][key].value);

      params.asc = false;
      sortedRows = sortColumn(evt, params).sortedRows;

      expect(sortedRows[0][key].value).toBe(values[0][key].value);
      expect(sortedRows[1][key].value).toBe(values[1][key].value);
      expect(sortedRows[2][key].value).toBe(values[2][key].value);
    }
  );
});
