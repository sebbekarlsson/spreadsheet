import React, { FC, useCallback } from "react";
import { ISheetProps } from "./types";
import { IRow } from "types/table";
import { Row } from "../../molecules/row";
import styled from "styled-components";
import { SheetMenu } from "../sheet-menu";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {
  addRow,
  addColumn,
  deleteRow,
  decreaseNrColumns,
  downloadCSV,
} from "../../../store/sheet/actions";

const SheetWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const SheetComponent: FC<ISheetProps> = ({ className, data }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const onAddColumn = useCallback(() => {
    dispatch(addColumn());
  }, [dispatch]);

  const onAddRow = useCallback(() => {
    dispatch(addRow());
  }, [dispatch]);

  const onDeleteRow = useCallback(() => {
    dispatch(deleteRow(data.rows.length - 1));
  }, [dispatch, data]);

  const onDecreaseColumns = useCallback(() => {
    dispatch(decreaseNrColumns());
  }, [dispatch, data]);

  const onDownload = useCallback(() => {
    dispatch(downloadCSV());
  }, [dispatch, data]);

  return (
    <SheetWrapper>
      <SheetMenu
        onAddColumn={onAddColumn}
        onDecreaseColumns={onDecreaseColumns}
        onDownload={onDownload}
      />
      <table className={className}>
        <tbody>
          {data.rows.map((row: IRow, id: number) => (
            <Row key={id} rowId={id} columns={row.columns} />
          ))}
        </tbody>
      </table>
      <SheetMenu onAddRow={onAddRow} onDeleteRow={onDeleteRow} />
    </SheetWrapper>
  );
};

export const Sheet = styled(SheetComponent)`
  width: 100%;
  height: 70%;
  max-height: 60%;
  overflow-y: scroll;
  flex: none;
  display: flex;
  flex-direction: column;
`;
