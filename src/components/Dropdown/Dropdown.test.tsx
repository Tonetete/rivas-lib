import * as React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import Dropdown from "./Dropdown";

const defaultProps = () => ({
  forLabel: "Data: ",
  titleLabel: "Data: ",
  options: [
    { display: "Value 1", value: "value1" },
    { display: "Value 2", value: "value2" },
    { display: "Value 3", value: "value3" },
  ],
  onChangeCb: (value) => value,
});

const renderComponent = (props) => {
  const div = document.createElement("div");
  ReactDOM.render(<Dropdown {...props} />, div);
  return div;
};

const rendererTestComponent = (props) => create(<Dropdown {...props} />);

describe("Dropdown Unit Test", () => {
  it("WHEN render component with data THEN should render dropdown with the data", () => {
    const props = defaultProps();
    const Component = renderComponent(props);

    Component.querySelectorAll("option").forEach((item, index) => {
      if (index === 0) {
        expect(item.innerHTML).toBe(`Select a ${props.forLabel}`);
      } else {
        expect(item.innerHTML).toBe(props.options[index - 1].display);
      }
    });
  });

  it("WHEN render component with data and don't provide a forLabel THEN should render the dropdown with 'label' as forLabel", () => {
    const { forLabel, ...props } = defaultProps();
    const Component = renderComponent(props);

    const label = Component.querySelector("label");

    expect(label.htmlFor).toBe("label");
  });

  it("WHEN render component and change value THEN should change option selected", () => {
    const props = defaultProps();
    jest.spyOn(props, "onChangeCb");
    const Component = rendererTestComponent(props);
    const Select = Component.root.findAllByType("select");
    const evt = { currentTarget: { value: "value2" } };
    Select[0].props.onChange(evt);

    expect(props.onChangeCb).toHaveBeenCalledWith(evt.currentTarget.value);
  });
});
