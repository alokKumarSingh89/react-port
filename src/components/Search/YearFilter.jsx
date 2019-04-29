import React from 'react';
import { withStyles, Radio } from '@material-ui/core';

const styles=(theme) => ({
	ul: {
    listStyle: "none",
    margin: 0
	},
	reset4: {
    padding: "0 0 0 15px"
  },
});
const YearConfig = [
	{
		value: 12,
		text: 'Past 1 Year'
	},
	{
		value: 24,
		text: 'Past 2 Years'
	},
	{
		value: 36,
		text: 'Past 3 Years'
	}
];
const YearFilter = ({ classes, action, time_filter_value, defaultObject,dateSelection }) => {
	return (
		<li>
			<div>
				<Radio
					value="Y"
					name="timeType"
					checked={defaultObject.timeType == 'Y'}
					onChange={dateSelection}
					classes={{
						root: classes.root,
						checked: classes.checked
					}}
				/>
				<label for="type2">Year(s)</label>
			</div>
			{defaultObject.timeType == 'Y' && (
				<ul className={classes.ul + ' ' + classes.reset4}>
					{YearConfig.map((year) => {
						return (
							<li key={year.value}>
								<div>
									<Radio
										name="time_filter_value"
										value={year.value}
										checked={time_filter_value == year.value}
										onChange={action}
										classes={{
											root: classes.root,
											checked: classes.checked
										}}
									/>
									<label>{year.text}</label>
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</li>
	);
};
export default withStyles(styles)(YearFilter);
