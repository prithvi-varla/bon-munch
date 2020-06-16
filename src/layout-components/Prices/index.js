import React from "react";
import SeasonCard from "./components/season-card";
import ExtraSeasonCard from "./components/extra-season-card";
export default props => {
  const { className } = props;
  const classes = ["prices__container"];
  if (className) classes.push(className);

  return (
    <div className={classes.join(" ")}>
      <ExtraSeasonCard />
      <SeasonCard />
    </div>
  );
};
