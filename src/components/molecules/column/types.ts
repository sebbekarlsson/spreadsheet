import { TColumn } from "types/table";

export interface IColumnProps extends Partial<HTMLElement> {
  data: TColumn;
  rowId: number;
  columnId: number;
  isEditing: boolean;
  headerColumn: boolean;
}
