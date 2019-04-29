import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import CheckIcon from "@material-ui/icons/CheckBox";
import ClearIcon from "@material-ui/icons/Clear";
import red from "@material-ui/core/colors/red";

const styles = theme => ({
  actions: {
    display: "flex"
  },
  avatar: {
    backgroundColor: red[500]
  },
  cardActionBtn: {
    height: "28px",
    width: "28px"
  },
  cardActionIcon: {
    color: theme.palette.primary.pink
  }
});

const CommentControls = props => {
  const { classes } = props;
  return (
    <CardActions className={classes.actions} disableActionSpacing>
<IconButton className={classes.cardActionBtn}>
       
      </IconButton>{" "}
    </CardActions>
  );
};

export default withStyles(styles)(CommentControls);
