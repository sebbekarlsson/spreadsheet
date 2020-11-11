import { ITable } from "types/table";

export interface ISheetProps extends Partial<HTMLElement> {
  data: ITable;
}
