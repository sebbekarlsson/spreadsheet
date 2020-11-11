import React, { FC } from "react";
import { TColumn } from "types/table";
import { Column } from "../column";
import styled from "styled-components";
import { theme } from "../../../theme";
import { IRowProps } from "./types";

const RowComponent: FC<IRowProps & Partial<HTMLElement>> = ({
  className,
  columns,
  rowId,
}) => (
  <tr className={className}>
    {columns.map((column: TColumn, id: number) => (
      <Column
        headerColumn={rowId == 0}
        isEditing={!!column.isEditing}
        columnId={id}
        rowId={rowId}
        key={column.data + id.toString()}
        data={column}
      />
    ))}
  </tr>
);

export const Row = styled(RowComponent)`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: ${(props) => (props.rowId == 0 ? "4.5rem" : "4rem")};
  border-bottom-color: ${theme.fgLight};
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;
