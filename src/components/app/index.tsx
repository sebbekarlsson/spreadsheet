import React, { FC } from "react";
import { IAppProps } from "./types";
import { StartPage } from "../pages/startpage";

export const App: FC<IAppProps> = (props: IAppProps) => <StartPage />;
