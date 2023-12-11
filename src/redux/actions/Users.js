import {
  SET_USERS,
  SET_LOADING,
  SET_ERROR,
  LOAD_USERS,
  SET_CURRENT_USER,
  PUT_NEW_USERINFO,
  IS_DRAGGING,
} from "redux/constants/Users";

export const setUsers = (users) => ({ type: SET_USERS, payload: users });

export const setLoading = () => ({ type: SET_LOADING });

export const setError = (error) => ({ type: SET_ERROR, payload: error });

export const loadUsers = () => ({ type: LOAD_USERS });

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export const sendUserInfo = (payload) => ({ type: PUT_NEW_USERINFO, payload });
