import {put, takeLatest, call, select} from "redux-saga/effects";
import {SEARCH_REQUEST} from "../constants/search.constant";
import {showErrorMsg} from "../actions/writeAction";
import {searchDiscloser} from "../../api/writeApi";
import {searchSuccess} from "../actions/search.action";

function* querySearchRequest({payload}) {
	try {
		let response=yield call(searchDiscloser, payload.id);
		yield put(searchSuccess(response.data));
	} catch (error) {
		yield put(showErrorMsg("Unable to delete the post"));
	}
}

function* writeSagas() {
  yield takeLatest(SEARCH_REQUEST, querySearchRequest);
}

export default writeSagas;