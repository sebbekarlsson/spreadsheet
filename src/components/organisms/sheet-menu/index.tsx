import React, { FC } from "react";
import { ISheetMenuProps } from "./types";
import { ActionButton } from "../../atoms/action-button";
import styled from "styled-components";
import { theme } from "../../../theme";

const SheetMenuComponent: FC<ISheetMenuProps> = ({
  className,
  onAddRow,
  onAddColumn,
  onDeleteRow,
  onDecreaseColumns,
  onDownload,
}) => {
  return (
    <div className={className}>
      <ActionButton
        text={onAddRow ? "Add row" : "Add column"}
        onClick={onAddRow || onAddColumn}
      />
      <ActionButton
        text={onDeleteRow ? "Delete row" : "Decrease"}
        onClick={onDeleteRow || onDecreaseColumns}
        variant="sub"
      />
      {onDownload && (
        <ActionButton text="Download" onClick={onDownload} variant="download" />
      )}
    </div>
  );
};

export const SheetMenu = styled(SheetMenuComponent)`
  width: 100%;
  flex: 1;
  display: flex;
  min-height: 6rem;
  justify-content: center;
  align-items: center;
  background-color: ${theme.bgContrast};
`;
