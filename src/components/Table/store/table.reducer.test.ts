import { getData } from "../__mocks__/table";
import { actions, reducer } from "./Table.reducer";

const data = getData();

const initialState = {
  asc: true,
  rows: data.rows,
  columns: data.columns,
  sorting: [] as any,
};

describe("Table Reducer Unit Test", () => {
  it("WHEN call SET_ASC action THEN should return state with 'asc' false", () => {
    const state = reducer(initialState, { type: actions.SET_ASC, payload: {} });

    expect(state.asc).toBe(false);
  });

  it("WHEN call SET_ROWS action THEN should return state with new 'rows'", () => {
    const state = reducer(initialState, {
      type: actions.SET_ROWS,
      payload: { rows: [{ value: "1" }] },
    });

    expect(state.rows).toEqual([{ value: "1" }]);
  });

  it("WHEN call SET_SORTING action THEN should return state with new 'sorting'", () => {
    const state = reducer(initialState, {
      type: actions.SET_SORTING,
      payload: { sorting: [{ value: true }] },
    });

    expect(state.sorting).toEqual([{ value: true }]);
  });

  it("WHEN call without action THEN should return state", () => {
    const state = reducer(initialState, {
      type: "DEFAULT",
      payload: {},
    });

    expect(state).toEqual(initialState);
  });
});
