import {
  SET_USERS,
  SET_LOADING,
  SET_ERROR,
  SET_CURRENT_USER,
  IS_DRAGGING,
} from "redux/constants/Users";

const initialState = {
  status: "idle",
  error: null,
  list: [],
  currentUser: {},
};

const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERS: {
      return {
        ...state,
        status: "received",
        list: payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        status: "loading",
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        status: "rejected",
        error: payload,
      };
    }
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
