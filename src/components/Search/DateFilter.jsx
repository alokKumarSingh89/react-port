import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core';
import YearFilter from './YearFilter';
import MonthFilter from './MonthFilter';

const styles=(theme) => ({
	hrd: {
    paddingTop: "10px",
    borderTop: "1px solid #fff"
  },
  ul: {
    listStyle: "none",
    margin: 0
	},
	reset: {
    padding: 0
  },
});

const DateFilter = ({ classes,defaultObject,dateSelection }) => {
	return (
		<Fragment>
			<div className={classes.hrd}>
				<span className="title">Date</span>
			</div>
			<ul className={classes.ul+' '+classes.reset}>
				<YearFilter defaultObject={defaultObject} dateSelection={dateSelection}/>
				<MonthFilter defaultObject={defaultObject} dateSelection={dateSelection}/>
			</ul>
		</Fragment>
	);
};

export default withStyles(styles)(DateFilter);
