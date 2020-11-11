import React, { FC } from "react";
import { theme } from "../../../theme";
import {
  Add as AddIcon,
  RemoveOutlined as SubIcon,
  CloudDownload as DownloadIcon,
} from "@material-ui/icons";
import styled from "styled-components";
import { IActionButtonProps } from "./types";

const ButtonWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.p`
  margin-top: 1rem;
`;

const ActionButtonComponent: FC<IActionButtonProps> = ({
  className,
  onClick,
  variant = "add",
  text,
}) => (
  <ButtonWrapper>
    <button className={className} onClick={onClick}>
      {variant === "add" ? (
        <AddIcon />
      ) : variant === "download" ? (
        <DownloadIcon />
      ) : (
        <SubIcon />
      )}
    </button>
    {text && <TextWrapper>{text}</TextWrapper>}
  </ButtonWrapper>
);

export const ActionButton = styled(ActionButtonComponent)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: ${theme.bgDark};
  color: ${theme.fgLight};
  font-weight: normal;
  width: 42px;
  height: 42px;
  border-radius: 42px;
  margin-left: 4rem;
  margin-right: 4rem;

  @media (max-width: 414px) {
    width: 32px;
    height: 32px;
    border-radius: 32px;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
`;
