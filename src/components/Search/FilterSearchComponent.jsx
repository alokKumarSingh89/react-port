import React, { Fragment } from "react";
import { Typography, Checkbox } from "@material-ui/core";
const YearConfig = [
  {
    value: 12,
    text: "Past 1 Year"
  },
  {
    value: 24,
    text: "Past 2 Years"
  },
  {
    value: 36,
    text: "Past 3 Years"
  }
];


export const YearFilter = ({ classes, action, time_filter_value }) => {
  return (
    <ul className={classes.ul + " " + classes.reset4}>
      {YearConfig.map(year => {
        return (
          <li key={year.value}>
            <div className={classes.daaRadio}>
              <input
                type="radio"
                name="time_filter_value"
                value={year.value}
                checked={time_filter_value == year.value}
                onChange={action}
              />
              <label>{year.text}</label>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export const FilterHeading = ({ classes,action }) => {
  return (
    <div className={"pt-4 pb-8 " + classes.filter}>
      <Typography component="span" className={classes.filterChild}>
        Filters
      </Typography>
      <Typography
        component="span"
        className={classes.filterChild + " " + classes.cursor}
				style={{fontSize: "1.1rem"}}
				onClick={action}
      >
        X
      </Typography>
    </div>
  );
};

export const WebFilter = ({ classes, config, updateSourcesFilter }) => {
  return (
    <ul className={classes.ul + " " + classes.reset4}>
      <li className="mb-2 ml-8">
        <Checkbox
          checked={config.is_on_source_thecapitalideas}
          onChange={event => updateSourcesFilter(event, "source")}
          value="thecapitalideas"
          color="primary"
        />

        <label>The Capital Ideas</label>
      </li>

      <li className="mb-2 ml-8">
        <Checkbox
          checked={config.is_on_source_americanfunds_advisor}
          onChange={event => updateSourcesFilter(event, "source")}
          value="americanfunds_advisor"
          color="primary"
        />
        <label>AF Advisor</label>
      </li>
      <li className="mb-2 ml-8">
        <Checkbox
          checked={config.is_on_source_americanfunds_ria}
          onChange={event => updateSourcesFilter(event, "source")}
          value="americanfunds_ria"
          color="primary"
        />

        <label>AF RIA</label>
      </li>
      <li className="mb-2 ml-8">
        <Checkbox
          checked={config.is_on_source_americanfunds_literature}
          onChange={event => updateSourcesFilter(event, "source")}
          value="americanfunds_literature"
          color="primary"
        />

        <label>AF Literature</label>
      </li>
      <li className="mb-2 ml-8">
        <Checkbox
          checked={config.is_on_source_americanfunds_individual}
          onChange={event => updateSourcesFilter(event, "source")}
          value="americanfunds_individual"
          color="primary"
        />
        <label>AF Investor</label>
      </li>
      <li className="mb-2 ml-8">
        <Checkbox
          checked={config.is_on_source_americanfunds_retirement}
          onChange={event => updateSourcesFilter(event, "source")}
          value="americanfunds_retirement"
          color="primary"
        />

        <label>AF Retirement</label>
      </li>
      <li className="mb-2 ml-8">
        <Checkbox
          checked={config.is_on_source_capitalgroup_us}
          onChange={event => updateSourcesFilter(event, "source")}
          value="capitalgroup_us"
          color="primary"
        />

        <label>AF Institutional</label>
      </li>
    </ul>
  );
};

export const ContentTypeFilter = ({ classes, config, updateContentFilter }) => {
  return (
    <Fragment>
      <div className={classes.hrd + " mb-4"}>
        <span className="title">Content Types</span>
      </div>

      <ul className={classes.ul + " " + classes.reset}>
        <li className="mb-2">
          <Checkbox
            checked={config.is_on_file_type_all}
            onChange={event => updateContentFilter(event, "content")}
            value="all"
            color="primary"
          />
          <label>All Content Types</label>
        </li>
        <li className="mb-2 ml-4">
          <Checkbox
            checked={config.is_on_file_type_pdf}
            onChange={event => updateContentFilter(event, "content")}
            value="pdf"
            color="primary"
          />
          <label>Pdf</label>
        </li>
        <li className="mb-2 ml-4">
          <Checkbox
            checked={config.is_on_file_type_image}
            onChange={event => updateContentFilter(event, "content")}
            value="image"
            color="primary"
          />

          <label>Image</label>
        </li>
        <li className="mb-2 ml-4">
          <Checkbox
            checked={config.is_on_file_type_chart}
            onChange={event => updateContentFilter(event, "content")}
            value="chart"
            color="primary"
          />

          <label>Chart</label>
        </li>
        <li className="mb-2 ml-4">
          <Checkbox
            checked={config.is_on_file_type_html}
            onChange={event => updateContentFilter(event, "content")}
            value="html"
            color="primary"
          />

          <label>Html</label>
        </li>
        <li className="mb-2 ml-4">
          <Checkbox
            checked={config.is_on_file_type_video}
            onChange={event => updateContentFilter(event, "content")}
            value="video"
            color="primary"
          />

          <label>Video</label>
        </li>
        <li className="mb-2 ml-4">
          <Checkbox
            checked={config.is_on_file_type_word}
            onChange={event => updateContentFilter(event, "content")}
            value="word"
            color="primary"
          />
          <label>Word</label>
        </li>
        <li className="mb-2 ml-4">
          <Checkbox
            checked={config.is_on_file_type_presentation}
            onChange={event => updateContentFilter(event, "content")}
            value="presentation"
            color="primary"
          />
          <label>PowerPoint</label>
        </li>
        <li className="mb-2 ml-4">
          <Checkbox
            checked={config.is_on_file_type_indd}
            onChange={event => updateContentFilter(event, "content")}
            value="indd"
            color="primary"
          />
          <label>InDesign</label>
        </li>
      </ul>
    </Fragment>
  );
};
export const ViewLess = ({ action }) => {
  return <div onClick={action}>View Less</div>;
};
export const ViewMore = ({ action }) => {
  return <div onClick={action}>View more</div>;
};