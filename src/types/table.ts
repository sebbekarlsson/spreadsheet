export type TColumn = {
  id?: number;
  rowId?: number;
  data: string | number;
  isEditing?: boolean;
};

export interface IRow {
  id?: number;
  columns: TColumn[];
}

export interface ITable {
  rows: IRow[];
}

export const tableToCSV = (table: ITable): string =>
  table.rows
    .map((row: IRow) =>
      row.columns.map((column: TColumn) => column.data).join(";")
    )
    .join("\n")
    .concat("\n");
