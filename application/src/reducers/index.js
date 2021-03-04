import { combineReducers } from "redux";

const dummyReducer = (state = [], action) => {
  return "DUMMY_REDUCER";
};

export default combineReducers({ dummyReducer });
