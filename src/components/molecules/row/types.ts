import { TColumn } from "types/table";

export interface IRowProps extends Partial<HTMLElement> {
  rowId: number;
  columns: TColumn[];
}
