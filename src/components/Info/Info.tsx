import React, { FC, PropsWithChildren } from "react";
import "./Info.css";

const Info: FC<PropsWithChildren> = ({ children }) => (
  <div className="info-container" data-testid="info-container">
    {children}
  </div>
);

export default Info;
