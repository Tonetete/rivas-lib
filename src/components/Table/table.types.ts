export interface Column {
  id: string;
  title: string;
}

export interface Row {
  [key: string]: {
    displayValue: any;
    value: any;
  };
}

export interface TableData {
  columns: Column[];
  rows: Row[];
}
