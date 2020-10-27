import * as React from "react";
import ReactDOM from "react-dom";
import { create, act } from "react-test-renderer";
import { getData } from "./__mocks__/table";
import Table from "./Table";

jest.mock("./sortable", () => ({
  sortColumn: (evt, params) => {
    const { sorting, rows } = params;
    const id = evt.currentTarget.id;
    const sortingColumns = { ...sorting };

    Object.keys(sortingColumns).forEach((key) => (sortingColumns[key] = false));
    sortingColumns[id] = true;

    return { sortedRows: rows, sortingColumns };
  },
}));

const renderComponent = (props) => {
  const div = document.createElement("div");
  ReactDOM.render(<Table {...props} />, div);
  return div;
};

const rendererTestComponent = (props) => create(<Table {...props} />);

describe("Table Unit Test", () => {
  it("WHEN render component with data THEN should render the table with the data", () => {
    const data = { ...getData() };
    const Component = renderComponent({ ...data });
    const header = Component.querySelector("thead > tr");
    const rows = Component.querySelectorAll("tbody > tr");

    header.querySelectorAll("th").forEach((cell, cellIndex) => {
      expect(cell.innerHTML).toBe(data.columns[cellIndex].title);
    });

    rows.forEach((row, rowIndex) =>
      row.querySelectorAll("td").forEach((cell, cellIndex) => {
        expect(cell.innerHTML).toBe(
          data.rows[rowIndex][Object.keys(data.rows[rowIndex])[cellIndex]]
            .displayValue
        );
      })
    );
  });

  it("WHEN click on th THEN should sort by that column and display asc/desc svg", () => {
    const data = { ...getData() };
    let TableComponent = null;
    act(() => {
      TableComponent = rendererTestComponent(data);
    });

    const Headers = TableComponent.root.findAllByType("th");

    const evt = { currentTarget: { id: "value1" } };
    act(() => {
      Headers[0].props.onClick(evt);
    });

    expect(Headers[0].props.className).toBe("sorting desc");

    act(() => {
      Headers[0].props.onClick(evt);
    });

    expect(Headers[0].props.className).toBe("sorting asc");
  });
});
