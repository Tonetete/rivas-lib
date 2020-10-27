import { TableData } from "../table.types";

export const actions = {
  SET_ASC: "SET_ASC",
  SET_ROWS: "SET_ROWS",
  SET_SORTING: "SET_SORTING",
};

interface State {
  asc: boolean;
  columns: TableData["columns"];
  rows: TableData["rows"];
  sorting: {
    [id: string]: boolean;
  };
}

interface Action {
  type: string;
  payload: any;
}

export const initialState = ({
  columns,
  rows,
}: {
  columns: TableData["columns"];
  rows: TableData["rows"];
}): State => ({
  asc: true,
  columns,
  rows,
  sorting: columns.reduce((prev, current) => {
    prev[current.id] = false;
    return prev;
  }, {}),
});

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actions.SET_ASC:
      return { ...state, asc: !state.asc };
    case actions.SET_ROWS:
      return { ...state, rows: action.payload.rows };
    case actions.SET_SORTING:
      return { ...state, sorting: action.payload.sorting };
    default:
      return { ...state };
  }
};
