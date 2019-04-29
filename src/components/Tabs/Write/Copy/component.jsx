import React from "react";
import { withStyles, Grid } from "@material-ui/core";
import SectionHeader from "../SectionHeader";
import FormField from "../../../Form/FormField/FormField";
import "../../../../assets/scss/write.css";

function styles(theme) {
  return {};
}
function Copy(props) {
  function saveInStore(event) {
    props.updateCopyRequest({ [event.target.name]: event.target.value });
  }
  function renderForm() {
    const { fields = [] } = props.data;
    return fields.map((field, index) => {
      const { fieldName, properties, fieldId, fieldValue } = field;
      const { allowComments, ...restProps } = properties;
      return (
        <FormField
          key={index}
          label={fieldName}
          name={fieldId + ""}
          allowComments={allowComments}
          onBlur={saveInStore}
          value={fieldValue}
          {...restProps}
        />
      );
    });
  }
  return (
    <div className={"write-copy-block content-block"}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={12}>
          <SectionHeader title="Article Copy" id="copy" />
          <div className={"write-copy-fields-box"}>
            <div className={"form-item"}>{renderForm()}</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default withStyles(styles)(Copy);
