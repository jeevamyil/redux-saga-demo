import { takeEvery, call, put, take, fork } from "redux-saga/effects";
import { actions } from "../Reducer/ActionConstants";
import * as API from "./api";

function* workersaga() {
  try {
    const response = yield call(fetch, "http://localhost:9999/TODOS");
    const result = yield response.json();
    yield put({ type: actions.FETCH_ALL, value: result });
  } catch (e) {
    console.log("fetching error");
  }
}

function* watchersaga() {
  yield takeEvery(actions.FETCH, workersaga);
}

function* deleteworker(props) {
  try {
    yield call(API.deleteTodoAPI, props.id);
  } catch (e) {
    console.log("deleting error");
  } finally {
    yield call(workersaga);
  }
}

function* deletewatchersaga() {
  while (true) {
    const action = yield take(actions.REMOVE);
    yield call(deleteworker, { id: action.value });
  }
}
function* clearworker() {
  try {
    yield call(API.clearTodoAPI);
  } catch (e) {
    console.log("clearing error");
  } finally {
    yield call(workersaga);
  }
}

function* clearwatchersaga() {
  yield takeEvery(actions.CLEAR, clearworker);
}

function* addworker(action) {
  try {

    yield call(API.addTodoAPI, {data:action.value}  );
  } catch (e) {
    console.log(e);
  } finally {
    yield call(workersaga);
  }
}

function* addwatchersaga() {
  yield takeEvery(actions.ADD, addworker);
}


function* completeworker(props) {
    try {
      yield call(API.completeTodoAPI, props.id);
    } catch (e) {
      console.log(e);
    } finally {
      yield call(workersaga);
    }
  }
  
  function* completewatchersaga() {
    while (true) {
        const action = yield take(actions.COMPLETE);
        yield call(completeworker, { id: action.value });
      }
  }
const todoSaga = [
  fork(deletewatchersaga),
  fork(watchersaga),
  fork(clearwatchersaga),
  fork(addwatchersaga),
  fork( completewatchersaga)
];
export default todoSaga;
