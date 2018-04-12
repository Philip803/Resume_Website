import axios from "axios";

//action
const SET_CURRENT_USER = "SET_CURRENT_USER";
const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";

//action creator
const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});

//thunk

//reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user;

    default:
      return state;
  }
}
