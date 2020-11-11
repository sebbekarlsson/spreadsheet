import { SheetActionTypes, ISheetState, EActionTypes } from "./types";
import { IRow, TColumn, tableToCSV } from "../../types/table";
import { range, downloadFile } from "../../utils";

const initialData = {
  rows: [
    {
      columns: [{ data: "id" }, { data: "brand" }],
    },
    {
      columns: [{ data: "A1" }, { data: "Volvo" }],
    },
    {
      columns: [{ data: "A2" }, { data: "Toyota" }],
    },
    {
      columns: [{ data: "A3" }, { data: "Saab" }],
    },
  ],
};

const initialState: ISheetState = {
  nrColumns: 2,
  CSVContent: "",
  data: initialData,
};

const actions = {
  [EActionTypes.DECREASE_NR_COLUMNS]: (state = initialState): ISheetState => {
    const newNrColumns = Math.max(0, state.nrColumns - 1);
    return {
      ...state,
      nrColumns: newNrColumns,
      data: {
        rows: [
          ...state.data.rows.map((row: IRow) =>
            row.columns.length > newNrColumns
              ? {
                  ...row,
                  columns: [...row.columns.slice(0, row.columns.length - 1)],
                }
              : row
          ),
        ],
      },
    };
  },
};

export const reducer = (
  state = initialState,
  action: SheetActionTypes
): ISheetState => {
  switch (action.type) {
    case EActionTypes.ADD_COLUMN:
      const newNrColumns = state.nrColumns + 1;
      return {
        ...state,
        nrColumns: newNrColumns,
        data: {
          rows: [
            ...state.data.rows.map((row: IRow) =>
              row.columns.length - 1 < newNrColumns
                ? { ...row, columns: [...row.columns, { data: "" }] }
                : row
            ),
          ],
        },
      };
    case EActionTypes.DECREASE_NR_COLUMNS:
      return actions[action.type](state);
    case EActionTypes.ADD_ROW:
      return {
        ...state,
        data: {
          rows: [
            ...state.data.rows,
            { columns: range(state.nrColumns).map((_) => ({ data: "" })) },
          ],
        },
      };
    case EActionTypes.DELETE_ROW:
      return {
        ...state,
        data: {
          rows: [
            ...state.data.rows.filter(
              (_, id: number) => id !== action.payload.id
            ),
          ],
        },
      };
    case EActionTypes.UPDATE_COLUMN:
      return {
        ...state,
        data: {
          rows: state.data.rows.map((row: IRow, id: number) =>
            id == action.payload.rowId
              ? {
                  columns: row.columns.map((column: TColumn, id: number) =>
                    id == action.payload.id
                      ? { ...column, ...action.payload }
                      : column
                  ),
                }
              : row
          ),
        },
      };
    case EActionTypes.DELETE_COLUMN:
      return {
        ...state,
        data: {
          rows: state.data.rows.map((row: IRow, id: number) =>
            id == action.payload.rowId
              ? {
                  columns: row.columns.filter(
                    (_, id: number) => id !== action.payload.columnId
                  ),
                }
              : row
          ),
        },
      };
    case EActionTypes.UNSELECT_ALL:
      return {
        ...state,
        data: {
          rows: state.data.rows.map((row: IRow) => ({
            columns: row.columns.map((column: TColumn) => ({
              ...column,
              isEditing: false,
            })),
          })),
        },
      };
    case EActionTypes.DOWNLOAD_CSV:
      downloadFile("data.csv", state.CSVContent, "text/csv");
      return state;
    default:
      return state;
  }
};

export const sheetReducer = (
  state = initialState,
  action: SheetActionTypes
): ISheetState => {
  const nextState = reducer(state, action);

  console.log(nextState);

  return { ...nextState, CSVContent: tableToCSV(nextState.data) };
};
