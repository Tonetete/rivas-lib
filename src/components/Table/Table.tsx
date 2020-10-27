import React from "react";
import { Row, Column } from "./table.types";
import { reducer, actions, initialState } from "./store/Table.reducer";
import { sortColumn } from "./sortable";
import "./table.style.css";

const sortingCb = (evt: React.SyntheticEvent, params) => {
  const { dispatch } = params;
  const { sortedRows, sortingColumns } = sortColumn(evt, {
    ...params,
  });
  dispatch({
    type: actions.SET_SORTING,
    payload: { sorting: sortingColumns },
  });
  dispatch({ type: actions.SET_ROWS, payload: { rows: sortedRows } });
  dispatch({ type: actions.SET_ASC });
};

const getColumns = ({
  asc,
  columns,
  rows,
  sorting,
  dispatch,
}): React.ReactElement => (
  <tr>
    {columns.map((col: Column) => (
      <th
        onClick={(evt) => sortingCb(evt, { asc, rows, sorting, dispatch })}
        key={`${col.id}`}
        id={`${col.id}`}
        className={`${
          sorting[col.id] ? `sorting ${asc ? "asc" : "desc"}` : ""
        }`}
      >
        {col.title}
      </th>
    ))}
  </tr>
);

const getRowCells = ({ columns, row }): React.ReactElement =>
  columns.map((col: Column, index: number) => (
    <td
      key={`td-${index}-${col.id}`}
      id={`td-${col.id}`}
      data-value={row[col.id].value}
    >
      {row[col.id].displayValue}
    </td>
  ));

const getRows = ({ columns, rows }): React.ReactElement =>
  rows.map((row: Row, index: number) => (
    <tr key={`row-${index}`}>{getRowCells({ columns, row })}</tr>
  ));

const Table = ({ columns, rows }: { columns: Column[]; rows: Row[] }) => {
  const { useReducer } = React;
  const [state, dispatch] = useReducer(
    reducer,
    initialState({ columns, rows })
  );

  return (
    <table id="table">
      <thead>{getColumns({ ...state, dispatch })}</thead>
      <tbody>{getRows({ ...state })}</tbody>
    </table>
  );
};

export default Table;
