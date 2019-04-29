import React, { Fragment } from "react";
import {
  withStyles,
  Paper,
  Checkbox,
  Radio,
  Button,
  Divider
} from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import {
  YearFilter,
  MonthFilter,
  FilterHeading,
  WebFilter,
  ContentTypeFilter,
  ViewLess,
  ViewMore
} from "./FilterSearchComponent";
import {
  onSourceType,
  onFileType,
  getFileType,
  getSourceType,
  setFilter,
  resetFilters
} from "./Helper";
import DateFilter from './DateFilter'
const style = theme => ({
  root: {
    "&$checked": {
      color: green[600]
    }
  },
  checked: {},
  section: {
    fontFamily: "AvenirNextLT-Demi",
    background: " #ccebf9",
    color: "#333",
    height: "120vh",
    zIndex: 100,
    padding: "0 1em"
  },
  filter: {
    display: "flex",
    justifyContent: "space-between"
  },
  filterChild: {
    fontSize: "1.55rem",
    fontWeight: "bold"
  },
  cursor: {
    cursor: "pointer"
  },
  hrd: {
    paddingTop: "10px",
    borderTop: "1px solid #fff"
  },
  ul: {
    listStyle: "none",
    margin: 0
  },
  fixedHeight: {
    height: "calc(120vh - 200px)"
  },
  reset: {
    padding: 0
  },
  reset4: {
    padding: "0 0 0 15px"
  },
  perfectScroll: {
    position: "relative",
    display: "block",
    overflow: "scroll",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  button: {
    color: "#009cdc",
    width: "80%",
    cursor: "pointer",
    fontWeight: 700
  },
  divider: {
    margin: "1em"
  }
});
class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultObject: props.defaultSearch,
      dateflag: false,
      sourceFlag: false,
      config: {
        is_on_file_type_all: false,
        is_on_file_type_pdf: false,
        is_on_file_type_image: false,
        is_on_file_type_chart: false,
        is_on_file_type_html: false,
        is_on_file_type_video: false,
        is_on_file_type_word: false,
        is_on_file_type_presentation: false,
        is_on_file_type_indd: false,
        is_on_source_all: false,
        is_on_source_internal: false,
        is_on_source_external: false,
        is_on_source_edam: false,
        is_on_source_web: false,
        is_on_source_americanfunds_advisor: false,
        is_on_source_americanfunds_ria: false,
        is_on_source_americanfunds_literature: false,
        is_on_source_thecapitalideas: false,
        is_on_source_fundfire: false,
        is_on_source_ignites: false,
        is_on_source_americanfunds_individual: false,
        is_on_source_americanfunds_retirement: false,
        is_on_source_capitalgroup_us: false,
        is_on_source_galileo: false
      }
    };
    this.dateSelection = this.dateSelection.bind(this);
    this.changeDateFlag = this.changeDateFlag.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.updateSourcesFilter = this.updateSourcesFilter.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }
  applyFilter() {
    let file_type = getFileType(this.state.config);
    const filter = this.state.defaultObject;
    filter["file_type"] = file_type;
    let source = getSourceType(this.state.config);
    filter["source"] = source;
    this.props.updateSearchQuery(filter);
  }
  changeDateFlag(dateflag) {
    this.setState({ dateflag });
  }
  showLess(status) {
    this.setState({ [status]: false });
  }
  showMore(status) {
    this.setState({ [status]: true });
  }
  dateSelection(event) {
    const { defaultObject } = this.state;
    defaultObject[event.target.name] = event.target.value;
    this.setState({ defaultObject });
  }
  resetFilter() {
    const filter = this.state.defaultObject;
    filter["source"] = [];
    filter["file_type"] = [];
    filter["time_filter_value"] = 36;
    filter["timeType"] = "Y";
    let config = resetFilters(this.state.config);
    this.setState({ defaultObject: filter, dateflag: false, config });
    this.props.updateSearchQuery(filter);
  }
  updateSourcesFilter(event, type) {
    let config;
    switch (type) {
      case "source":
        config = onSourceType(event.target.value, this.state.config);
        this.setState({ config });
        break;
      case "content":
        config = onFileType(event.target.value, this.state.config);
        this.setState({ config });
        break;
    }
  }
  componentWillMount() {
    let { defaultObject, config } = this.state;
    defaultObject["file_type"] = this.props.searchResult["file_type"];
    defaultObject["source"] = this.props.searchResult["source"];
    config = setFilter(config, defaultObject);
    this.setState({ defaultObject, config });
  }
  componentWillReceiveProps(nextProps) {
    let { defaultObject, config } = this.state;
    defaultObject["file_type"] = nextProps.searchResult["file_type"];
    defaultObject["source"] = nextProps.searchResult["source"];
    config = setFilter(config, defaultObject);
    this.setState({ defaultObject, config });
  }
  render() {
    const { defaultObject, dateflag, config } = this.state;
    const { classes } = this.props;
    return (
      <Paper>
        <section className={classes.section}>
          <FilterHeading classes={classes} action={this.props.action} />
          <div className={classes.fixedHeight}>
            <div className={"row " + classes.perfectScroll}>
              <div className="col-12">
								<DateFilter defaultObject={defaultObject} dateSelection={this.dateSelection}/>
								<div className={classes.hrd + " mb-4"}>
                  <span className="title">Source</span>
                </div>
                <ul className={classes.ul + " " + classes.reset}>
                  <li className="mb-2">
                    <Checkbox
                      checked={config.is_on_source_all}
                      onChange={event =>
                        this.updateSourcesFilter(event, "source")
                      }
                      value="all"
                      color="primary"
                    />

                    <label>All Sources</label>
                  </li>
                  <li className="mb-2">
                    <Checkbox
                      checked={config.is_on_source_internal}
                      onChange={event =>
                        this.updateSourcesFilter(event, "source")
                      }
                      value="internal"
                      color="primary"
                    />
                    <label>Internal Only</label>
                  </li>
                  <li className="mb-2 ml-4">
                    <Checkbox
                      checked={config.is_on_source_edam}
                      onChange={event =>
                        this.updateSourcesFilter(event, "source")
                      }
                      value="edam"
                      color="primary"
                    />
                    <label>eDAM</label>
                  </li>
                  <li className="mb-2 ml-4">
                    <Checkbox
                      checked={config.is_on_source_galileo}
                      onChange={event =>
                        this.updateSourcesFilter(event, "source")
                      }
                      value="galileo"
                      color="primary"
                    />
                    <label>Galileo</label>
                  </li>
                  <li className="mb-2 ml-4">
                    <Checkbox
                      checked={config.is_on_source_web}
                      onChange={event =>
                        this.updateSourcesFilter(event, "source")
                      }
                      value="web"
                      color="primary"
                    />
                    <label>Web</label>
                    {this.state.sourceFlag && (
                      <WebFilter
                        classes={classes}
                        updateSourcesFilter={this.updateSourcesFilter}
                        config={config}
                      />
                    )}
                  </li>
                  {!this.state.sourceFlag && (
                    <li>
                      <ViewMore action={() => this.showMore("sourceFlag")} />
                    </li>
                  )}
                  {this.state.sourceFlag && (
                    <Fragment>
                      <li className="mb-2">
                        <Checkbox
                          checked={config.is_on_source_external}
                          onChange={event =>
                            this.updateSourcesFilter(event, "source")
                          }
                          value="external"
                          color="primary"
                        />

                        <label>All External</label>
                      </li>
                      <li className="mb-2 ml-4">
                        <Checkbox
                          checked={config.is_on_source_fundfire}
                          onChange={event =>
                            this.updateSourcesFilter(event, "source")
                          }
                          value="fundfire"
                          color="primary"
                        />

                        <label>Fundfire</label>
                      </li>
                      <li className="mb-2 ml-4">
                        <Checkbox
                          checked={config.is_on_source_ignites}
                          onChange={event =>
                            this.updateSourcesFilter(event, "source")
                          }
                          value="ignites"
                          color="primary"
                        />

                        <label>Ignites</label>
                      </li>
                      <li>
                        <ViewLess action={() => this.showLess("sourceFlag")} />
                      </li>
                    </Fragment>
                  )}
                </ul>
              </div>
              <ContentTypeFilter
                classes={classes}
                updateContentFilter={this.updateSourcesFilter}
                config={config}
              />
            </div>
          </div>

          <div className="ft center">
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={this.applyFilter}
            >
              Apply Filters
            </Button>
            <div className={classes.divider} />
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              onClick={this.resetFilter}
            >
              Reset Filters
            </Button>
          </div>
        </section>
      </Paper>
    );
  }
}
export default withStyles(style)(Filter);
