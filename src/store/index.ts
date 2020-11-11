import { sheetReducer } from "./sheet/reducer";
import { combineReducers } from "redux";
import { SheetActionTypes } from "./sheet/types";

export const rootReducer = combineReducers({
  sheet: sheetReducer,
});

export type DispatchType = (args: any) => SheetActionTypes;

export type RootState = ReturnType<typeof rootReducer>;
