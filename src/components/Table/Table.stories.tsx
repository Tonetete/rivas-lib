import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { TableData } from "./table.types";
import Table from "./Table";

export default {
  title: "Components/Table",
  component: Table,
} as Meta;

interface Props {
  tableData: TableData;
}

const Template: Story<Props> = ({ tableData }) => <Table {...tableData} />;

const tableData = {
  columns: [
    {
      id: "tier",
      title: "Tier",
    },
    {
      id: "match",
      title: "Match",
    },
    {
      id: "winners",
      title: "Winners",
    },
    {
      id: "amount",
      title: "Amount",
    },
  ],
  rows: [
    {
      tier: { displayValue: "I", value: 1 },
      match: {
        displayValue: "5 Numbers + 2 Euronumbers",
        value: "5 Numbers + 2 Euronumbers",
      },
      winners: { displayValue: "0x", value: 0 },
      amount: { displayValue: "€31,000,000", value: 31000000 },
    },
    {
      tier: { displayValue: "II", value: 2 },
      match: {
        displayValue: "5 Numbers + 1 Euronumber",
        value: "5 Numbers + 1 Euronumber",
      },
      winners: { displayValue: "0x", value: 0 },
      amount: { displayValue: "€697,028.10", value: 697028.1 },
    },
    {
      tier: { displayValue: "III", value: 3 },
      match: {
        displayValue: "5 Numbers + 0 Euronumbers",
        value: "5 Numbers + 0 Euronumbers",
      },
      winners: { displayValue: "3x", value: 3 },
      amount: { displayValue: "€246,009.90", value: 246009.9 },
    },
    {
      tier: { displayValue: "IV", value: 4 },
      match: {
        displayValue: "4 Numbers + 2 Euronumbers",
        value: "4 Numbers + 2 Euronumbers",
      },
      winners: { displayValue: "58x", value: 58 },
      amount: { displayValue: "€4,241.50", value: 4241.5 },
    },
    {
      tier: { displayValue: "V", value: 5 },
      match: {
        displayValue: "4 Numbers + 1 Euronumber",
        value: "4 Numbers + 1 Euronumber",
      },
      winners: { displayValue: "882x", value: 882 },
      amount: { displayValue: "€251", value: 251 },
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  tableData,
};
