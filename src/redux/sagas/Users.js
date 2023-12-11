import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { LOAD_USERS, PUT_NEW_USERINFO } from "redux/constants/Users";
import { setError, setLoading, setUsers } from "redux/actions/Users";
import axios from "axios";
import { JSON_USERS_URL } from "constants/ApiConstant";

export function* loadAllUsers() {
  yield takeEvery(LOAD_USERS, function* () {
    try {
      yield put(setLoading());
      // yield call(() => {
      //   axios.get(JSON_USERS_URL).then(({ data }) => console.log(data));
      // });
      const data = yield call(() => {
        return fetch(JSON_USERS_URL).then((res) => res.json());
      });
      yield put(setUsers(data));
    } catch (error) {
      yield put(setError(error.message));
    }
  });
}

export function* sendUserInfo() {
  yield takeEvery(PUT_NEW_USERINFO, function* ({ payload }) {
    try {
      yield call(() => {
        fetch(`${JSON_USERS_URL}/${payload.id}`, {
          method: "POST",
          body: JSON.stringify(payload),
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(loadAllUsers), fork(sendUserInfo)]);
}
