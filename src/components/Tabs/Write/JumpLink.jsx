import React, { Fragment } from "react";
import { Typography, Button } from "@material-ui/core";
export const JumpLink = ({ section, name, scrollToSection }) => {
  return (
    <Fragment>
      <Typography variant="title" component={Button} onClick={scrollToSection}>
        {name}
      </Typography>
      <Typography component="span" className={"tab-nav-divider"}>
        |
      </Typography>
    </Fragment>
  );
};
