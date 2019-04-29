import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Toolbar, Typography } from "@material-ui/core";
import * as R from "ramda";
import scrollToComponent from "react-scroll-to-component";
import Copy from "./Copy/container";
import Graphics from "./Graphics/Graphics";
import Backups from "./Backups/Backups";
import { fetchAllFieldsRequest } from "../../../redux/actions/writeAction";
import { unHideTabs } from "../../../redux/actions/dashBoardActions";
import Modal from "../../Modal/Modal";
import Comments from "../../Comments";
import { toggleComment } from "../../../redux/actions/commentAction";
import Twitter from "./social/Twitter";
import Linkedin from "./social/Linkedin";
import Facebook from "./social/Facebook";

import { JumpLink } from "./JumpLink";

class Write extends React.Component {
  componentDidMount() {
    this.props.fetchAllFieldsRequest(this.props.assignment.id);
  }
  section = [
    <Copy
      ref={section => {
        this.Copy = section;
      }}
    />,
    <Graphics
      ref={section => {
        this.Graphics = section;
      }}
    />,
    <Twitter
      ref={section => {
        this.twitter = section;
      }}
    />,
    <Linkedin
      ref={section => {
        this.linkedin = section;
      }}
    />,
    <Facebook
      ref={section => {
        this.facebook = section;
      }}
    />,
    <Backups
      makeApiCall={this.makeApiCall}
      ref={section => {
        this.Backups = section;
      }}
    />
  ];
  renderJumpLink() {
    return (
      <Toolbar className={"tab-nav"}>
        <JumpLink
          scrollToSection={() =>
            scrollToComponent(this.Copy, {
              offset: 0,
              align: "top",
              duration: 1500
            })
          }
          name="Article Copy"
        />
        <JumpLink
          scrollToSection={() =>
            scrollToComponent(this.Graphics, {
              offset: 0,
              align: "top",
              duration: 1500
            })
          }
          name="Article Graphic"
        />
        <JumpLink
          scrollToSection={() =>
            scrollToComponent(this.twitter, {
              offset: 0,
              align: "top",
              duration: 1500
            })
          }
          name="Twitter"
        />
        <JumpLink
          scrollToSection={() =>
            scrollToComponent(this.linkedin, {
              offset: 0,
              align: "top",
              duration: 1500
            })
          }
          name="Linkedin"
        />
        <JumpLink
          scrollToSection={() =>
            scrollToComponent(this.facebook, {
              offset: 0,
              align: "top",
              duration: 1500
            })
          }
          name="Facebook"
        />
        <JumpLink
          scrollToSection={() =>
            scrollToComponent(this.Backups, {
              offset: 0,
              align: "top",
              duration: 1500
            })
          }
          name="Backup"
        />
      </Toolbar>
    );
  }
  render() {
    const { writeList, loading } = this.props;
    if (writeList && R.isEmpty(writeList.write)) return null; //this.props.history.push("/");
    if (writeList.error) return "Error from server";
    console.log(writeList);
    return (
      <div>
        <Toolbar className={"tab-header"}>
          <Typography variant="title">Write</Typography>
        </Toolbar>

        <div className="write-block">
          {this.section.map((item, index) => (
            <Fragment key={index}>
              {this.renderJumpLink()}
              {item}
            </Fragment>
          ))}
          {this.props.comment.commentToggle && (
            <Modal>
              <Comments />
            </Modal>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ write, assignments, comment }) => {
  return {
    writeList: write,
    assignment: assignments.assignment,
    comment
  };
};

const ConnectedComponent = connect(
  mapStateToProps,
  {
    toggleComment,
    unHideTabs,
    fetchAllFieldsRequest
  }
)(Write);
export default ConnectedComponent;
