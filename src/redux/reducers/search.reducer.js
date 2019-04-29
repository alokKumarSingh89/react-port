import {SEARCH_SUCCESS} from "../constants/search.constant";

let initialState={
	error: null,
	result:[]
}

export const searchReducer=(state=initialState, action) => {
	switch(action.type) {
		case SEARCH_SUCCESS:
			return {...state,error:null,result:action.payload}
		default:
			return state
	}
}