import React, { Fragment } from "react";
import { withStyles, Paper, Grid, Typography } from "@material-ui/core";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import Divider from "@material-ui/core/Divider";
import moment from "moment";
import FeedbackComponent from "./FeedbackComponent";
import configDeterminator from "../../configs/configDeterminator";
const style = theme => {
  return {
    root: {
      margin: "2em 0"
    },
    paper: {
      flexGrow: 1
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    pdfSize: {
      fontSize: "2em"
    },
    text: {
      fontSize: "1em"
    },
    whiteSpace: {
      padding: "9px 0px 5px 10px !important"
    },
    date: {
      padding: "9px 0px 5px 10px !important",
      color: "#bdbdbd",
      fontSize: "14px",
      lineHeight: "11px"
    },
    link: {
      color: "#3d5b62",
      fontSize: "25px"
    },
    paragraph: {
      fontSize: "15px",
      margin: 0,
      color: "#696969"
    },
    viewmore: {
      fontSize: "2em",
      fontWeight: "bold",
      cursor: "pointer"
    },
    close: {
      fontWeight: "700",
      cursor: "pointer",
      fontSize: "14px",
      color: "#262d3a"
    }
  };
};
class SearchListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: "preview", feedbackKey: "" };
    this.changeKey = this.changeKey.bind(this);
    this.createPreview(this.props.data.snippets[0]);
    this.sendFeedback = this.sendFeedback.bind(this);
  }
  createPreview(doc) {
    let docLength = doc.text.split(" ");
    if (docLength.length > 60) {
      docLength.splice(60);
      doc.preview = docLength.join(" ");
    }
  }
  extention = doc => {
    return doc.split(".")[1].toUpperCase();
  };
  changeKey() {
    const key = this.state.key == "preview" ? "text" : "preview";
    this.setState({ key });
  }
  getDesciption(obj) {
    const key = this.state.key;
    const sec = key == "preview" ? "text" : "preview";
    return obj[key] || obj[sec];
  }
  sendFeedback(feedback) {
    const { data } = this.props;
    this.setState({ feedbackKey: feedback });
    const feedbackQuery = {
      feedback,
      doc_id: data.jdoc_id,
      section_id: data.snippets[0].section_id
    };
    this.props.sendFeedback(feedbackQuery);
  }
  render() {
    const { classes, data } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={24}>
            <Grid item xs={1}>
              <Grid container spacing={24}>
                <Grid item xs={12} className={classes.center}>
                  <InsertDriveFile className={classes.pdfSize} />
                </Grid>
                <Grid item xs={12} className={classes.center}>
                  <Typography className={classes.text}>
                    {this.extention(data.doc_id)}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <Grid container spacing={24}>
                <Grid
                  item
                  xs={12}
                  className={classes.date + " " + classes.whiteSpace}
                >
                  {moment(data.edam_date).format("MMM DD,YYYY")}
                </Grid>
                <Grid item xs={12} className={classes.whiteSpace}>
                  <a
                    href={data.path[0].path}
                    target="_blank"
                    className={classes.link}
                  >
                    {data.title}
                  </a>
                </Grid>
                <Grid item xs={12} className={classes.whiteSpace}>
                  <p
                    className={classes.paragraph}
                    dangerouslySetInnerHTML={{
                      __html: this.getDesciption(data.snippets[0])
                    }}
                  />
                  {data.snippets[0].preview && (
                    <span onClick={this.changeKey}>
                      {this.state.key == "preview" ? (
                        <span className={classes.viewmore}>...</span>
                      ) : (
                        <span className={classes.close}>x close</span>
                      )}
                    </span>
                  )}
                </Grid>
                <Grid item xs={12} className={classes.whiteSpace}>
                  <FeedbackComponent
                    feedbackKey={this.state.feedbackKey}
                    data={data.feedbacks}
                    sendFeedback={this.sendFeedback}
                  />
                </Grid>
                <Grid item xs={12} className={classes.whiteSpace}>
                  <Divider />
                </Grid>
                <Grid item xs={12} className={classes.whiteSpace}>
                  <div>
                    SOURCE(S):
                    {data.path[0].type}
                    {data.workfront_id && (
                      <span>
                        <b>| Workfront Id</b>:
                        <a
                          target="_blank"
                          href={`${configDeterminator.workfronturl}${
                            data.workfront_id
                          }`}
                        >
                          {data.workfront_id}
                        </a>
                      </span>
                    )}
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}
export default withStyles(style)(SearchListComponent);
