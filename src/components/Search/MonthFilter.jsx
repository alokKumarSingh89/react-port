import React, {Fragment} from 'react';
import {withStyles, Radio} from '@material-ui/core';
const MonthConfig = [
  {
    value: 1,
    text: "Past 1 Month"
  },
  {
    value: 2,
    text: "Past 2 Months"
  },
  {
    value: 3,
    text: "Past 3 Months"
  }
  // {
  //   value: 4,
  //   text: "Past 4 Months"
  // },
  // {
  //   value: 5,
  //   text: "Past 5 Months"
  // },
  // {
  //   value: 6,
  //   text: "Past 6 Months"
  // }
];
const styles=theme => ({
	ul: {
    listStyle: "none",
    margin: 0
	},
	reset4: {
    padding: "0 0 0 15px"
  },
})
const MonthFilter=({classes,defaultObject,dateSelection,time_filter_value,dateflag,changeDateFlag}) => {
	return (
		<li>
					<div>
						<Radio
							value="M"
							name="timeType"
							checked={defaultObject.timeType != 'Y'}
							onChange={dateSelection}
							classes={{
								root: classes.root,
								checked: classes.checked
							}}
						/>

						<label for="type1">Month(s)</label>
					</div>
					{defaultObject.timeType != 'Y' && (
						<ul className={classes.ul + ' ' + classes.reset4}>
						{MonthConfig.map(month => {
							return (
								<li>
									<div className={classes.daaRadio}>
										<input
											type="radio"
											name="time_filter_value"
											value={month.value}
											checked={time_filter_value == month.value}
											onChange={dateSelection}
										/>
										<label>{month.text}</label>
									</div>
								</li>
							);
						})}
			
						{!dateflag && (
							<li>
								<span onClick={() => changeDateFlag(true)}>View More</span>
							</li>
						)}
			
						{dateflag && (
							<Fragment>
								<li >
									<div className={classes.daaRadio}>
										<input
											type="radio"
											name="time_filter_value"
											value="4"
											checked={time_filter_value == 4}
											onChange={dateSelection}
										/>
										<label for="m4">Past 4 Months</label>
									</div>
								</li>
								<li>
									<div className={classes.daaRadio}>
										<input
											type="radio"
											name="time_filter_value"
											value="5"
											checked={time_filter_value == 5}
											onChange={dateSelection}
										/>
										<label for="m5">Past 5 Months</label>
									</div>
								</li>
								<li>
									<div className={classes.daaRadio}>
										<input
											type="radio"
											name="time_filter_value"
											value="6"
											checked={time_filter_value == 6}
											onChange={dateSelection}
										/>
										<label for="m6">Past 6 Months</label>
									</div>
								</li>
							</Fragment>
						)}
						{dateflag && (
							<li>
								<span onClick={() => changeDateFlag(false)}>view less</span>
							</li>
						)}
					</ul>
					)}
				</li>
	)
}
export default withStyles(styles)(MonthFilter)