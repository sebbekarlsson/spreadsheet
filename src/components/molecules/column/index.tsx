import React, { FC, useCallback, ChangeEvent, useState } from "react";
import { IColumnProps } from "./types";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { updateColumn, unselectAll } from "../../../store/sheet/actions";
import { theme } from "../../../theme";

export const ColumnComponent: FC<IColumnProps> = ({
  className,
  data,
  isEditing,
  rowId,
  columnId,
}) => {
  const dispatch: Dispatch<any> = useDispatch();
  const [value, setValue] = useState<string | number>(data.data);

  const handleClick = useCallback(() => {
    if (isEditing) return;

    dispatch(unselectAll());
    dispatch(
      updateColumn({ data: value, isEditing: true, rowId, id: columnId })
    );
  }, [data, dispatch, isEditing]);

  const handleBlur = useCallback(() => {
    dispatch(
      updateColumn({ data: value, isEditing: false, rowId, id: columnId })
    );
    dispatch(unselectAll());
  }, [data, dispatch, isEditing, value]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [isEditing, dispatch]
  );

  return (
    <td onClick={handleClick} className={className}>
      {isEditing ? (
        <input
          onBlur={handleBlur}
          type="text"
          className={className}
          value={value}
          onChange={handleChange}
        />
      ) : (
        value
      )}
    </td>
  );
};

export const Column = styled(ColumnComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: none;
  border: none;
  text-align: center;
  outline: none;
  font-size: ${(props) => (props.headerColumn ? "large" : "medium")};
  font-weight: ${(props) => (props.headerColumn ? "bold" : "normal")};
  border-right-style: solid;
  border-right-color: ${theme.fgLight};
  border-right-width: 1px;
  height: 100%;
  width: 100%;
  background-color: ${(props) => (props.isEditing ? theme.fgLight : "white")};
`;
