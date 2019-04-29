import React,{Fragment} from "react";
import Tune from "@material-ui/icons/Tune";
import SearchIcon from "@material-ui/icons/Search";
import {withStyles, Paper, IconButton, TextField} from "@material-ui/core";
import IntegrationDownshift from './Autocomplete.component'
const styles = theme => {
  return {
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center"
    },
    input: {
      marginLeft: 8,
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      width: 1,
      height: 28,
      margin: 4
		},
		autocomplete: {
			padding: "0.4em 1em",
			borderBottom: "1px solid #ccc"
		}
  };
};
const testData = ["ALok","Kumar","Singh","Ram","Bilas","Singh"]
const SearchComponent=props => (
	<Fragment>
  <Paper className={props.classes.root} elevation={1}>
    <IconButton className={props.classes.iconButton} aria-label="Menu">
      <Tune onClick={props.openFilter} />
    </IconButton>
    <TextField
      InputProps={{
        disableUnderline: true
      }}
      className={props.classes.input}
      placeholder="ENTER A SENTENCE, PHRASE OR KEYWORD"
      onKeyUp={props.handleSearchInput}
      onChange={props.handleSearchInput}
      value={props.search}
      autoFocus
    />
    <IconButton className={props.classes.iconButton} aria-label="Search">
      <SearchIcon />
		</IconButton>
		
		</Paper>
		{/* <Paper>
			<IntegrationDownshift/>
		</Paper> */}
		</Fragment>
);
export default withStyles(styles)(SearchComponent);