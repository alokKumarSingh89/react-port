import React from "react";
import { withStyles } from "@material-ui/core";
import SentimentVerySatisfied from "@material-ui/icons/SentimentVerySatisfied";
import SentimentSatisfied from "@material-ui/icons/SentimentSatisfied";
import SentimentVeryDissatisfied from "@material-ui/icons/SentimentVeryDissatisfied";
import MoodBad from "@material-ui/icons/MoodBad";
import PlayArrow from "@material-ui/icons/PlayArrow";

const style = theme => ({
  smallemoji: {
    display: "inline-block",
    width: "75px",
    cursor: "pointer",
    color: "#707070"
  },
  bigemoji: {
    display: "inline-block",
    width: "110px",
    cursor: "pointer",
    color: "#707070"
  },
  activeEmoji: {
    color: "#4095a0"
  },
  rate: {
    color: "#4095a0",
    fontSize: "16px",
    fontWeight: 800
  }
});

const Feedback = props => {
  const { classes, feedbackKey } = props;
  return (
    <div>
      <span className={classes.rate}>Rate</span>
      <PlayArrow className={classes.rate} />
      {props.data.map(feedback => {
        let partial;
        if (feedback.very_good) {
          partial = (
            <div
              onClick={() => props.sendFeedback("vlike")}
              className={
                feedbackKey == "vlike"
                  ? `${classes.smallemoji} ${classes.activeEmoji}`
                  : classes.smallemoji
              }
            >
              <SentimentVerySatisfied />
              <span>Great</span>
            </div>
          );
        } else if (feedback.good) {
          partial = (
            <div
              onClick={() => props.sendFeedback("like")}
              className={
                feedbackKey == "like"
                  ? `${classes.smallemoji} ${classes.activeEmoji}`
                  : classes.smallemoji
              }
            >
              <SentimentSatisfied />
              <span>Good</span>
            </div>
          );
        } else if (feedback.neutral == 0) {
          partial = (
            <div
              onClick={() => props.sendFeedback("neutral")}
              className={
                feedbackKey == "neutral"
                  ? `${classes.bigemoji} ${classes.activeEmoji}`
                  : classes.bigemoji
              }
            >
              <SentimentVeryDissatisfied />
              <span>Not Sure</span>
            </div>
          );
        } else {
          partial = (
            <div
              onClick={() => props.sendFeedback("dislike")}
              className={
                feedbackKey == "dislike"
                  ? `${classes.bigemoji} ${classes.activeEmoji}`
                  : classes.bigemoji
              }
            >
              <MoodBad />
              <span>Not Helpful</span>
            </div>
          );
        }

        return partial;
      })}
    </div>
  );
};

export default withStyles(style)(Feedback);
