import React from "react";
import Logo from "./index";
import { getTimeOfDayString, isSSR } from "../../../commons/utils";

export default () => {
  return isSSR() ? null : (
    <React.Fragment>
      <Logo timeOfDay={getTimeOfDayString()} />
    </React.Fragment>
  );
};
