import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { withStyles } from "@material-ui/core";
import SearchComponent from "./SearchComponent";
import {
  searchRequest,
  feedbackRequest,
  clearStore,
  autocorrectRequest,
  autocompleteRequest,
  removeAutoCompleteList
} from "../../redux/actions/search.action";
import SearchListComponent from "./SearchListComponent";
import FilterComponent from "./FilterComponent";
import { Grid, Typography } from "@material-ui/core";
import ReactLoading from "react-loading";
// import SortBy from "./Sort";
// import Pagination from "./Pagination";

const styles = theme => ({
  root: {
    background: "#f2f2f2"
  },
  noresults: {
    margin: "1em",
    color: "#395356",
    fontSize: "0.8rem",
    lineHeight: "19px"
  }
});
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "", filter: false };
    this.defaultSearch = {
      timeType: "Y",
      apply_filter: false,
      query: "",
      offset: 0,
      source: [],
      //query_id: 0,
      file_type: [],
      time_filter_value: 36,
      sort_order: "relevance",
      request: {
        session_id: localStorage.getItem("sessionId"),
        user_id: "",
        search_type: 1,
        query_type: "as"
      },
      is_nlp: true
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.sendFeedback = this.sendFeedback.bind(this);
    this.openFilter = this.openFilter.bind(this);
    this.updateSearchQuery = this.updateSearchQuery.bind(this);
    this.handleSearchbutton = this.handleSearchbutton.bind(this);
    this.changePage = this.changePage.bind(this);
    this.updateSearchQuerySort = this.updateSearchQuerySort.bind(this);
    this.updateSearchQueryAutoComplete = this.updateSearchQueryAutoComplete.bind(
      this
    );
    this.clearAutoComplete = this.clearAutoComplete.bind(this);
  }
  componentDidMount() {
    this.props.clearStore();
    this.searchQuery = Object.assign({}, this.defaultSearch);
  }
  clearSearch = () => {
    this.clearAutoComplete();
    this.setState({ search: "" });
  };
  changePage(page) {
    this.searchQuery["offset"] = page;
    this.props.searchRequest(this.searchQuery);
  }
  updateSearchQueryAutoComplete(query) {
    this.searchQuery["query"] = query;
    this.setState({ search: "" });
    this.props.removeAutoCompleteList();
    this.props.searchRequest(this.searchQuery);
  }
  clearAutoComplete() {
    this.props.removeAutoCompleteList();
  }
  updateSearchQuerySort(query) {
    this.searchQuery["query"] = query;
    this.props.autocorrectRequest(query);
    this.props.searchRequest(this.searchQuery);
  }
  handleSearchbutton() {
    if (!this.state.search) return;
    this.searchQuery.request["user_id"] = this.props.user.userId;
    this.searchQuery["query"] = this.state.search;
    this.searchQuery["apply_filter"] = false;
    this.searchQuery["offset"] = 0;
    this.searchQuery["publication_from_date"] = moment()
      .subtract(this.searchQuery["time_filter_value"], "months")
      .format("YYYY-MM-DD");
    this.searchQuery["publication_to_date"] = moment().format("YYYY-MM-DD");
    this.props.autocorrectRequest(this.state.search);
    this.setState({ search: "" });
    this.props.searchRequest(this.searchQuery);
  }
  sendFeedback(query) {
    const { search, user, feedbackRequest } = this.props;
    query["user"] = user.userId;
    query["query_id"] = search.query_id;
    feedbackRequest(query);
  }
  updateSearchQuery(query) {
    let keys = Object.keys(query);
    keys.forEach(objKey => {
      this.searchQuery[objKey] = query[objKey];
    });
    this.searchQuery["publication_from_date"] = moment()
      .subtract(this.searchQuery["time_filter_value"], "months")
      .format("YYYY-MM-DD");
    this.searchQuery["apply_filter"] = true;
    this.props.searchRequest(this.searchQuery);
  }
  handleSearchInput(event) {
    if (event.keyCode != 13) {
      this.setState({ search: event.target.value });
      if (
        event.target.value.length != 0 &&
        event.target.value.length % 3 == 0
      ) {
        this.props.autocompleteRequest({
          in_text: event.target.value,
          userid: this.props.user.userId
        });
      }
    } else {
      if (event.target.value) {
        this.handleSearchbutton();
      }
    }
  }
  openFilter() {
    const { search } = this.props;
    if (search.records) {
      this.setState({ filter: true });
    }
  }
  sortBy = event => {
    this.searchQuery[event.target.name] = event.target.value;
    this.props.searchRequest(this.searchQuery);
  };
  closeFilter = () => {
    this.setState({ filter: false });
  };
  render() {
    const { search, loading, classes } = this.props;
    return (
      <div className={classes.root}>
        <SearchComponent
          handleSearchInput={this.handleSearchInput}
          search={this.state.search}
          openFilter={this.openFilter}
          handleSearchbutton={this.handleSearchbutton}
          auto_complete={this.props.auto_complete}
          clearAutoComplete={this.clearAutoComplete}
          updateSearchQuery={this.updateSearchQueryAutoComplete}
          clearSearch={this.clearSearch}
        />
        {loading && (
          <div>
            <ReactLoading type={"bubbles"} color={"#000000"} />
          </div>
        )}
        <Grid container spacing={12}>
          <Grid item xs={3}>
            {this.state.filter && (
              <FilterComponent
                action={this.closeFilter}
                updateSearchQuery={this.updateSearchQuery}
                defaultSearch={this.searchQuery}
                searchResult={search}
              />
            )}
          </Grid>
          <Grid
            item
            xs={this.state.filter ? 8 : 12}
            style={this.state.filter ? { marginLeft: "1.5em" } : {}}
          >
            {/* {search.query && (
              <SortBy
                search={search}
                searchQuery={this.searchQuery}
                auto_correct={this.props.auto_correct}
                action={this.sortBy}
                updateSearchQuery={this.updateSearchQuerySort}
              />
            )} */}
            <div>
              {search.records && !search.records.length && (
                <Typography className={classes.noresults}>
                  This selection has no results.
                </Typography>
              )}
              {search.records &&
                search.records.map(result => (
                  <SearchListComponent
                    data={result}
                    key={result.jdoc_id}
                    sendFeedback={this.sendFeedback}
                  />
                ))}
              {/* {search && search.record_count && (
                <Pagination search={search} changePage={this.changePage} />
              )} */}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return {
    search: store.search.result,
    user: store.user,
    loading: store.search.loading,
    auto_correct: store.search.auto_correct,
    auto_complete: store.search.auto_complete
  };
};
export default withStyles(styles)(
  connect(
    mapStateToProps,
    {
      searchRequest,
      feedbackRequest,
      clearStore,
      autocorrectRequest,
      autocompleteRequest,
      removeAutoCompleteList
    }
  )(Search)
);
