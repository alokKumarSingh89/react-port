import {toast} from "react-toastify";
import {SEARCH_REQUEST, SEARCH_FAIL, SEARCH_SUCCESS, FEEDBACK_REQUEST} from "../constants/search.constant";

export const searchRequest=(payload) => (
	{
		type: SEARCH_REQUEST,
		payload
	}
)
export const searchRequestFail=(error) => (
	{
		type: SEARCH_FAIL,
		error
	}
)
export const searchSuccess=(payload) => (
	{
		type: SEARCH_SUCCESS,
		payload
	}
)
export const feedbackRequest=(payload) => (
	{
		type: FEEDBACK_REQUEST,
		payload
	}
)
export const clearStore=(payload) => (
	{
		type: FEEDBACK_REQUEST,
		payload
	}
)
export const autocorrectRequest=(payload) => (
	{
		type: FEEDBACK_REQUEST,
		payload
	}
)
export const autocompleteRequest=(payload) => (
	{
		type: FEEDBACK_REQUEST,
		payload
	}
)
export const removeAutoCompleteList=(payload) => (
	{
		type: FEEDBACK_REQUEST,
		payload
	}
)
