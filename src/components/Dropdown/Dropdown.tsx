import * as React from "react";
import "./dropdown.style.css";
export interface Props {
  forLabel?: string;
  titleLabel: string;
  options: Option[];
  onChangeCb: (value: string) => {};
}

export interface Option {
  disabled: boolean;
  display: string;
  value: string;
}

const Dropdown = ({ forLabel, titleLabel, options, onChangeCb }: Props) => {
  const defaultOption = {
    disabled: true,
    display: `Select a ${forLabel}`,
    value: `Select a ${forLabel}`,
  };
  const selectOptions = [defaultOption].concat(
    options.map((option) => ({
      disabled: false,
      display: option.display,
      value: option.value,
    }))
  );
  const forLabelValue = forLabel || "label";

  return (
    <div>
      <label htmlFor={forLabelValue}>{titleLabel}</label>
      <select
        className="select"
        defaultValue={defaultOption.value}
        onChange={(evt) => onChangeCb(evt.currentTarget.value)}
        name={forLabelValue}
      >
        {selectOptions.map((option: Option, index: number) => (
          <option
            key={`option-${index}`}
            value={option.value}
            disabled={option.disabled}
          >
            {option.display}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
