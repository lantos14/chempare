import "regenerator-runtime/runtime";
import { takeEvery, put } from 'redux-saga/effects';
// import * as API from '../services/api';

function* getCompundResult() {
  try {
    // yield delay(100);
    // const url = '';
    // const data = yield call(API.getData, url);
    const data = 'saga-success';
    yield put({
      type: 'COMPOUND_RESULT_SUCCEEDED',
      payload: data,
    });
  } catch (error) {
    console.log(error); //eslint-disable-line
  }
}

export default function* rootSaga() {
  yield takeEvery('COMPOUND_RESULT_REQUESTED', getCompundResult);
}