import React from "react";
import { connect } from "react-redux";
import Copy from "./component";
import { updateCopyRequest } from "../../../../redux/actions/writeAction";

function mapStateToProps({ write }) {
  return {
    data: write.write.copy
  };
}
export default connect(
  mapStateToProps,
  {
    updateCopyRequest
  }
)(Copy);
