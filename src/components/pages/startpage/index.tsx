import React, { FC, useMemo } from "react";
import { IStartPage } from "./types";
import { Sheet } from "../../organisms/sheet";

import { useSelector } from "react-redux";
import { RootState } from "store";

export const StartPage: FC<IStartPage> = (props) => {
  const sheetData = useSelector((state: RootState) => state.sheet.data);
  return useMemo(() => <Sheet data={sheetData} />, [sheetData]);
};
