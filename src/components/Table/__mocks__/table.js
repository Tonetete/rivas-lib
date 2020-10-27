export const getData = () => ({
  columns: [
    {
      id: "value1",
      title: "Value 1",
    },
    {
      id: "value2",
      title: "Value 2",
    },
    {
      id: "value3",
      title: "Value 3",
    },
  ],
  rows: [
    {
      value1: { displayValue: "Value 31", value: 31 },
      value2: { displayValue: "Value 12", value: 12 },
      value3: { displayValue: "Value 13", value: 13 },
    },
    {
      value1: { displayValue: "Value 21", value: 21 },
      value2: { displayValue: "Value 22", value: 22 },
      value3: { displayValue: "Value 33", value: 33 },
    },
    {
      value1: { displayValue: "Value 11", value: 11 },
      value2: { displayValue: "Value 32", value: 32 },
      value3: { displayValue: "Value 23", value: 23 },
    },
  ],
});
