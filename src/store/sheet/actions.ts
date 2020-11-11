// src/store/chat/actions.ts

import { EActionTypes, SheetActionTypes } from "./types";
import { TColumn } from "types/table";

export const updateColumn = (column: TColumn): SheetActionTypes => {
  return {
    type: EActionTypes.UPDATE_COLUMN,
    payload: column,
  };
};

export const addRow = (): SheetActionTypes => {
  return {
    type: EActionTypes.ADD_ROW,
    payload: null,
  };
};

export const addColumn = (): SheetActionTypes => {
  return {
    type: EActionTypes.ADD_COLUMN,
    payload: null,
  };
};

export const deleteRow = (id: number): SheetActionTypes => {
  return {
    type: EActionTypes.DELETE_ROW,
    payload: { id },
  };
};

export const deleteColumn = (
  rowId: number,
  columnId: number
): SheetActionTypes => {
  return {
    type: EActionTypes.DELETE_COLUMN,
    payload: { rowId, columnId },
  };
};

export const unselectAll = (): SheetActionTypes => {
  return {
    type: EActionTypes.UNSELECT_ALL,
    payload: null,
  };
};

export const decreaseNrColumns = (): SheetActionTypes => {
  return {
    type: EActionTypes.DECREASE_NR_COLUMNS,
    payload: null,
  };
};

export const downloadCSV = (): SheetActionTypes => {
  return {
    type: EActionTypes.DOWNLOAD_CSV,
    payload: null,
  };
};
