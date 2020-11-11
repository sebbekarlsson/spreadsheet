import { TColumn, ITable } from "../../types/table";

export enum EActionTypes {
  UPDATE_COLUMN,
  DELETE_ROW,
  DELETE_COLUMN,
  ADD_ROW,
  ADD_COLUMN,
  UNSELECT_ALL,
  DECREASE_NR_COLUMNS,
  DOWNLOAD_CSV,
}

export interface ISheetState {
  data: ITable;
  nrColumns: number;
  CSVContent: string;
}

export interface updateColumnAction {
  type: EActionTypes.UPDATE_COLUMN;
  payload: TColumn;
}

export interface deleteRowAction {
  type: EActionTypes.DELETE_ROW;
  payload: { id: number };
}

export interface deleteColumnAction {
  type: EActionTypes.DELETE_COLUMN;
  payload: { columnId: number; rowId: number };
}

export interface decreaseNrColumnsAction {
  type: EActionTypes.DECREASE_NR_COLUMNS;
  payload: null;
}

export interface addRowAction {
  type: EActionTypes.ADD_ROW;
  payload: null;
}

export interface addColumnAction {
  type: EActionTypes.ADD_COLUMN;
  payload: null;
}

export interface unselectAllAction {
  type: EActionTypes.UNSELECT_ALL;
  payload: null;
}

export interface downloadCSVAction {
  type: EActionTypes.DOWNLOAD_CSV;
  payload: null;
}

export type SheetActionTypes =
  | updateColumnAction
  | deleteRowAction
  | addRowAction
  | unselectAllAction
  | addColumnAction
  | deleteColumnAction
  | decreaseNrColumnsAction
  | downloadCSVAction;
